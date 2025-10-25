import { ArrowUpRight, Play } from "lucide-react"
import { Link } from "react-router-dom"

import type { Project } from "../../data/projects"

type ProjectSpotlightProps = {
  project: Project
}

export function ProjectSpotlight({ project }: ProjectSpotlightProps) {
  return (
    <section
      id="project"
      className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 sm:py-20"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Project
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
            {project.title}
          </h2>
        </div>
        <p className="max-w-xl text-sm text-muted-foreground">
          Follow our CS 2340 deliverable as we close out each sprint, review the
          tech powering the experience, and jump into deeper project details.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <article className="flex flex-col gap-6 rounded-3xl border border-border/70 bg-card p-8 shadow-sm">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase text-muted-foreground">
              {project.tagline}
            </p>
            {project.status && (
              <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {project.status}
              </span>
            )}
            <p className="text-base text-muted-foreground">
              {project.summary}
            </p>
          </div>

          {project.image && (
            <figure className="overflow-hidden rounded-2xl border border-border/80 bg-background/80">
              <img
                src={project.image}
                alt={project.imageAlt ?? `${project.title} interface preview`}
                className="h-auto w-full object-cover"
              />
            </figure>
          )}

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-border/80 bg-background/80 p-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Highlights
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-muted-foreground">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border/80 bg-background/80 p-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Tech Stack
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border/70 bg-card/60 px-3 py-1 text-xs font-medium text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={project.repoLink}
              className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary/60 hover:text-primary"
            >
              GitHub Repository
              <ArrowUpRight className="size-4" />
            </a>
            {project.liveSite && (
              <a
                href={project.liveSite}
                className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary/20"
              >
                Project website
                <ArrowUpRight className="size-4" />
              </a>
            )}
            <Link
              to={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary/20"
            >
              Project details
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </article>

        <aside className="flex flex-col gap-6">
          {project.userStories && project.userStories.length > 0 && (
            <div className="rounded-3xl border border-border/80 bg-card p-6 shadow-sm">
              <h3 className="text-base font-semibold text-foreground">
                Key User Stories In Scope
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {project.userStories.map((story) => (
                  <li
                    key={story}
                    className="rounded-2xl border border-border/70 bg-background/70 p-3"
                  >
                    {story}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="rounded-3xl border border-primary/40 bg-primary/10 p-6 shadow-sm backdrop-blur">
            <h3 className="text-base font-semibold text-foreground">
              Demo Video
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Embed a YouTube, Vimeo, or Loom recording by replacing this
              container with an iframe.
            </p>
            <div className="mt-4 flex aspect-video items-center justify-center rounded-2xl border border-dashed border-primary/40 bg-background/70 text-sm text-muted-foreground">
              <div className="flex flex-col items-center gap-3 px-6 text-center">
                <Play className="size-10 text-primary" />
                <p>
                  Drop your demo embed code here or link to a live walk-through.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-border/80 bg-card p-6 shadow-sm">
            <h3 className="text-base font-semibold text-foreground">
              Next Steps
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Keep stakeholders informed with a quick note about what comes next.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              {project.nextSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  )
}
