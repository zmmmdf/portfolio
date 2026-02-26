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

export async function getPortfolioProjects(
    portfolioUrl: string
): Promise<GitHubProject[]> {
    const GITHUB_URL = "https://github.com";

    try {
        // 1. Fetch the GitHub starred list HTML
        const res = await fetch(portfolioUrl, {
            next: { revalidate: 3600 }, // Cache for 1 hour to avoid rate limits
            headers: {
                "User-Agent": "Mozilla/5.0",
            },
        });

        if (!res.ok) {
            console.error("Failed to fetch GitHub portfolio list", res.status);
            return [];
        }

        const html = await res.text();
        const $ = cheerio.load(html);

        // 2. Extract relative paths from the list links (e.g. /zmmmdf/portfolio)
        const repoPaths: string[] = [];
        $("a").each((_, element) => {
            const href = $(element).attr("href");
            // Match links that look like /username/repo but aren't /stargazers or /forks etc
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

        // Filtering out github navigation links
        const validRepoPaths = repoPaths.filter(
            (p) =>
                !["/login", "/join", "/contact", "/features", "/about"].includes(p) &&
                !p.startsWith("/features/") &&
                !p.startsWith("/codespaces") &&
                !p.startsWith("/sponsors") &&
                !p.startsWith("/contact/")
        );

        // 3. For each valid repo, fetch from GitHub API
        const projects = await Promise.all(
            validRepoPaths.map(async (repoPath) => {
                const [, owner, repo] = repoPath.split("/");

                try {
                    const apiRes = await fetch(
                        `https://api.github.com/repos/${owner}/${repo}`,
                        {
                            next: { revalidate: 3600 * 12 }, // Cache repository details for 12 hours
                            headers: {
                                "User-Agent": "Mozilla/5.0",
                                Accept: "application/vnd.github.v3+json",
                            },
                        }
                    );

                    if (!apiRes.ok) throw new Error("API Limit or Error");

                    const data = await apiRes.json();

                    return {
                        title: data.name,
                        href: data.html_url,
                        // Format dates (e.g. "Dec 2023 - Present")
                        dates: new Date(data.created_at).toLocaleDateString("en-US", {
                            month: "short",
                            year: "numeric",
                        }) + " - Present",
                        active: true,
                        description: data.description || "",
                        technologies: data.topics || [],
                        links: [
                            {
                                type: "Source",
                                href: data.html_url,
                                icon: null, // We'll add the GitHub icon in the page component
                            },
                            ...(data.homepage
                                ? [
                                    {
                                        type: "Website",
                                        href: data.homepage,
                                        icon: null, // Globe icon added in page component
                                    },
                                ]
                                : []),
                        ],
                        image: "",
                        video: "",
                    } as GitHubProject;
                } catch (error) {
                    console.error(`Failed to fetch API for ${repoPath}`, error);
                    return null;
                }
            })
        );

        return projects.filter((p): p is GitHubProject => p !== null);
    } catch (error) {
        console.error("Error scraping GitHub list:", error);
        return [];
    }
}
