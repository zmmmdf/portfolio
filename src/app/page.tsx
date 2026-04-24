import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

import { getPortfolioProjects, GitHubProject } from "@/lib/github";
import { Icons } from "@/components/icons";

const BLUR_FADE_DELAY = 0.04;

export default async function Page() {
  const portfolioUrl = DATA.portfolioUrl;
  let portfolioProjects: GitHubProject[] | any[] = [];

  if (portfolioUrl) {
    portfolioProjects = await getPortfolioProjects(portfolioUrl);

    // Add GitHub and Website icons back since they couldn't be serialized effectively
    portfolioProjects = portfolioProjects.map(project => ({
      ...project,
      links: project.links.map((link: any) => ({
        ...link,
        icon: link.type === "Source" ? <Icons.github className="size-3" /> : <Icons.globe className="size-3" />,
      }))
    }));
  }

  // Prefer curated DATA.projects; fall back to scraped GitHub portfolio list.
  const projectsToRender =
    DATA.projects.length > 0 ? DATA.projects : portfolioProjects;

  // Group projects by category when curated data is in use; otherwise render flat.
  type AnyProject = any;
  const projectGroups: { name: string | null; projects: AnyProject[] }[] =
    (() => {
      const src = projectsToRender as AnyProject[];
      const hasCategories =
        src.length > 0 && typeof src[0]?.category === "string";
      if (!hasCategories) return [{ name: null, projects: src }];
      const buckets = new Map<string, AnyProject[]>();
      for (const p of src) {
        const cat: string = p.category || "Other";
        if (!buckets.has(cat)) buckets.set(cat, []);
        buckets.get(cat)!.push(p);
      }
      return Array.from(buckets, ([name, projects]) => ({ name, projects }));
    })();

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
                description={
                  "description" in education ? education.description : undefined
                }
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="awards">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 8.5}>
            <h2 className="text-xl font-bold">Awards</h2>
          </BlurFade>
          {DATA.awards.map((award, id) => (
            <BlurFade
              key={award.title}
              delay={BLUR_FADE_DELAY * 8.75 + id * 0.05}
            >
              <ResumeCard
                href={award.href || undefined}
                logoUrl={award.logoUrl}
                altText={award.title}
                title={award.title}
                subtitle={award.issuer}
                period={
                  award.start === award.end
                    ? award.start
                    : `${award.start} - ${award.end}`
                }
                description={award.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="relative [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]">
            <div className="flex flex-wrap gap-1 overflow-y-auto max-h-[150px] pt-1 pb-8">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge>{skill}</Badge>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-10 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What I&apos;ve been building
                </h2>
                <p className="mx-auto max-w-[720px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Agentic AI oversight layers, LLM-powered developer tools,
                  genome-scale metabolic modelling, and cognitive-science
                  experiments — shipped at hackathons (AI Engine Scotland,
                  Edinburgh BioHackathon) and as open-source Python libraries.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-1 text-sm text-muted-foreground">
                <div>
                  <span className="font-semibold text-foreground">
                    {DATA.projects.length}
                  </span>{" "}
                  shipped projects
                </div>
                <div aria-hidden className="h-4 w-px bg-border" />
                <div>
                  <span className="font-semibold text-foreground">6,000+</span>{" "}
                  PyPI downloads
                </div>
                <div aria-hidden className="h-4 w-px bg-border" />
                <div>
                  <span className="font-semibold text-foreground">2</span>{" "}
                  hackathons
                </div>
              </div>
            </div>
          </BlurFade>
          <div className="space-y-10 max-w-[800px] mx-auto">
            {projectGroups.map((group, gi) => (
              <div key={group.name ?? "all"} className="space-y-4">
                {group.name && (
                  <BlurFade
                    delay={BLUR_FADE_DELAY * (11.5 + gi * 0.15)}
                  >
                    <div className="flex items-center gap-3">
                      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        {group.name}
                      </h3>
                      <div className="h-px flex-1 bg-border" />
                      <span className="text-xs text-muted-foreground tabular-nums">
                        {group.projects.length}
                      </span>
                    </div>
                  </BlurFade>
                )}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {group.projects.map((project, id) => (
                    <BlurFade
                      key={project.title}
                      delay={BLUR_FADE_DELAY * (12 + gi * 0.2) + id * 0.05}
                    >
                      <ProjectCard
                        href={project.href}
                        title={project.title}
                        description={project.description}
                        dates={project.dates}
                        tags={project.technologies}
                        image={project.image}
                        video={project.video}
                        links={project.links}
                      />
                    </BlurFade>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like building things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Fast constraints, real teams, shipped products. Recent
                  hackathons where I&apos;ve built things from scratch.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id="volunteer">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 15.5}>
            <h2 className="text-xl font-bold">Volunteer</h2>
          </BlurFade>
          {DATA.volunteer.map((v, id) => (
            <BlurFade
              key={v.organization + v.title}
              delay={BLUR_FADE_DELAY * 15.75 + id * 0.05}
            >
              <ResumeCard
                href={v.href || undefined}
                logoUrl={v.logoUrl}
                altText={v.organization}
                title={v.organization}
                subtitle={v.title}
                period={`${v.start} - ${v.end}`}
                description={v.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Reach me on{" "}
                <Link
                  href={DATA.contact.social.Signal.url}
                  className="text-blue-500 hover:underline"
                >
                  Signal
                </Link>
                {" "}or drop me an{" "}
                <Link
                  href={`mailto:${DATA.contact.email}`}
                  className="text-blue-500 hover:underline"
                >
                  email
                </Link>
                {" "}— I&apos;ll respond whenever I can.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
