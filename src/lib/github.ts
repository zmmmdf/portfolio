import * as cheerio from "cheerio";

export type GitHubProject = {
    title: string;
    href: string;
    description: string;
    dates: string;
    technologies: string[];
    links: {
        type: string;
        href: string;
        icon: React.ReactNode;
    }[];
    image: string;
    video: string;
    active: boolean;
};

interface GitHubRepoResponse {
    name: string;
    html_url: string;
    created_at: string;
    pushed_at: string;
    description: string | null;
    topics: string[];
    homepage: string | null;
    archived: boolean;
    fork: boolean;
}

function buildProject(data: GitHubRepoResponse): GitHubProject {
    const start = new Date(data.created_at).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
    });
    const lastActivity = new Date(data.pushed_at).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
    });
    const isActive = !data.archived;
    const dates = `${start} - ${isActive ? "Present" : lastActivity}`;

    return {
        title: data.name,
        href: data.html_url,
        dates,
        active: isActive,
        description: data.description ?? "",
        technologies: data.topics ?? [],
        links: [
            { type: "Source", href: data.html_url, icon: null },
            ...(data.homepage
                ? [{ type: "Website", href: data.homepage, icon: null }]
                : []),
        ],
        image: "",
        video: "",
    };
}

async function fetchRepoFromAPI(
    owner: string,
    repo: string
): Promise<GitHubProject | null> {
    try {
        const res = await fetch(
            `https://api.github.com/repos/${owner}/${repo}`,
            {
                next: { revalidate: 3600 * 12 },
                headers: {
                    "User-Agent": "portfolio-site/1.0",
                    Accept: "application/vnd.github.v3+json",
                },
            }
        );
        if (!res.ok) throw new Error(`API error ${res.status}`);
        return buildProject(await res.json() as GitHubRepoResponse);
    } catch (error) {
        console.error(`Failed to fetch repo ${owner}/${repo}`, error);
        return null;
    }
}

async function getProjectsViaAPI(username: string): Promise<GitHubProject[]> {
    try {
        const res = await fetch(
            `https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=12`,
            {
                next: { revalidate: 3600 * 6 },
                headers: {
                    "User-Agent": "portfolio-site/1.0",
                    Accept: "application/vnd.github.v3+json",
                },
            }
        );
        if (!res.ok) return [];
        const repos = await res.json() as GitHubRepoResponse[];
        return repos
            .filter((r) => !r.fork && !r.archived)
            .slice(0, 10)
            .map(buildProject);
    } catch (error) {
        console.error("GitHub API fallback failed", error);
        return [];
    }
}

export async function getPortfolioProjects(
    portfolioUrl: string
): Promise<GitHubProject[]> {
    // Extract username from Stars list URL:
    // https://github.com/stars/{username}/lists/{list-name}
    const urlParts = portfolioUrl.split("/");
    const starsIndex = urlParts.indexOf("stars");
    const username = starsIndex >= 0 ? urlParts[starsIndex + 1] : undefined;

    try {
        // 1. Fetch the GitHub starred list HTML
        const res = await fetch(portfolioUrl, {
            next: { revalidate: 3600 },
            headers: {
                "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
                Accept: "text/html,application/xhtml+xml",
                "Accept-Language": "en-US,en;q=0.9",
            },
        });

        if (!res.ok) {
            console.error("Failed to fetch GitHub portfolio list", res.status);
            return username ? getProjectsViaAPI(username) : [];
        }

        const html = await res.text();
        const $ = cheerio.load(html);

        // 2. Extract /owner/repo paths from anchor hrefs
        const repoPaths: string[] = [];
        $("a").each((_, element) => {
            const href = $(element).attr("href");
            if (
                href &&
                href.split("/").length === 3 &&
                href.startsWith("/") &&
                !href.includes("/stargazers") &&
                !href.includes("/network")
            ) {
                if (!repoPaths.includes(href)) {
                    repoPaths.push(href);
                }
            }
        });

        // Remove known GitHub navigation paths
        const validRepoPaths = repoPaths.filter(
            (p) =>
                !["/login", "/join", "/contact", "/features", "/about"].includes(
                    p
                ) &&
                !p.startsWith("/features/") &&
                !p.startsWith("/codespaces") &&
                !p.startsWith("/sponsors") &&
                !p.startsWith("/contact/")
        );

        // 3. Fall back to GitHub API if scraping returned nothing
        if (validRepoPaths.length === 0) {
            console.warn(
                "No repos found via scraping, falling back to GitHub API"
            );
            return username ? getProjectsViaAPI(username) : [];
        }

        // 4. Fetch metadata for each repo from the GitHub API
        const projects = await Promise.all(
            validRepoPaths.map(async (repoPath) => {
                const [, owner, repo] = repoPath.split("/");
                return fetchRepoFromAPI(owner, repo);
            })
        );

        return projects.filter((p): p is GitHubProject => p !== null);
    } catch (error) {
        console.error("Error scraping GitHub list:", error);
        return username ? getProjectsViaAPI(username) : [];
    }
}
