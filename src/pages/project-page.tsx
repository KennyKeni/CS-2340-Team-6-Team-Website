import { ArrowLeft, ArrowUpRight, Play } from "lucide-react"
import { Navigate, useParams } from "react-router-dom"
import { Link } from "react-router-dom"

import { getProjectBySlug } from "../data/projects"

export function ProjectPage() {
  const { slug = "" } = useParams<{ slug: string }>()
  const project = getProjectBySlug(slug)

  if (!project) {
    return <Navigate to="/404" replace />
  }

  return (
    <div className="space-y-16 pb-16">
      <section className="relative overflow-hidden border-b border-border/60 bg-card/40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_var(--primary)_0%,_transparent_60%)] opacity-[0.08]" />
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 pb-16 pt-12 sm:px-10 lg:pt-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-primary"
          >
            <ArrowLeft className="size-4" />
            Back to overview
          </Link>
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3">
              <span className="rounded-full border border-border bg-background/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Case Study
              </span>
              <span className="rounded-full border border-border bg-background/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {project.slug}
              </span>
            </div>
            <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            {project.status && (
              <span className="inline-flex max-w-fit items-center justify-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {project.status}
              </span>
            )}
            <p className="max-w-3xl text-lg text-muted-foreground">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border/70 bg-background px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={project.repoLink}
                className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-5 py-2 text-sm font-medium text-foreground transition hover:border-primary/60 hover:text-primary"
              >
                GitHub Repository
                <ArrowUpRight className="size-4" />
              </a>
              {project.liveSite && (
                <a
                  href={project.liveSite}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-5 py-2 text-sm font-medium text-primary transition hover:bg-primary/20"
                >
                  Project Website
                  <ArrowUpRight className="size-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 sm:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Problem
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              {project.overview.problem}
            </p>
          </div>
          <div className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Solution
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              {project.overview.solution}
            </p>
          </div>
          <div className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Impact
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              {project.overview.impact}
            </p>
          </div>
        </div>
      </section>

      {project.systemDescription && (
        <section className="mx-auto w-full max-w-5xl px-6 sm:px-10">
          <div className="rounded-3xl border border-border/70 bg-card p-8 shadow-sm">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              System Description
            </h2>
            {Array.isArray(project.systemDescription) ? (
              project.systemDescription.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-sm text-muted-foreground">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="mt-4 text-sm text-muted-foreground">
                {project.systemDescription}
              </p>
            )}
          </div>
        </section>
      )}

      {project.processDescription && (
        <section className="mx-auto w-full max-w-5xl px-6 sm:px-10">
          <div className="rounded-3xl border border-border/70 bg-card p-8 shadow-sm">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Process Description
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              {project.processDescription}
            </p>
          </div>
        </section>
      )}

      {(project.currentSprint || project.upcomingSprint) && (
        <section className="mx-auto w-full max-w-5xl px-6 sm:px-10">
          <div className="grid gap-6 lg:grid-cols-2">
            {project.currentSprint && (
              <div className="rounded-3xl border border-border/70 bg-card p-8 shadow-sm">
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {project.currentSprint.number} · {project.currentSprint.focus}
                </h2>
                {project.currentSprint.dateRange && (
                  <p className="mt-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    {project.currentSprint.dateRange}
                  </p>
                )}
                <p className="mt-3 text-sm font-semibold text-foreground">
                  Completed User Stories
                </p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {project.currentSprint.completedStories.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-border/70 bg-background/70 p-3"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {project.upcomingSprint && (
              <div className="rounded-3xl border border-border/70 bg-card p-8 shadow-sm">
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {project.upcomingSprint.number} · {project.upcomingSprint.focus}
                </h2>
                {project.upcomingSprint.kickoff && (
                  <p className="mt-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    Kicks off {project.upcomingSprint.kickoff}
                  </p>
                )}
                <p className="mt-3 text-sm font-semibold text-foreground">
                  Sprint Priorities
                </p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {project.upcomingSprint.priorities.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-dashed border-primary/40 bg-background/70 p-3"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      <section className="mx-auto grid w-full max-w-5xl gap-10 px-6 sm:px-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <article className="rounded-3xl border border-border/70 bg-card p-8 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Highlights
          </h2>
          <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-2xl border border-border/70 bg-background/70 p-4"
              >
                {highlight}
              </li>
            ))}
          </ul>
        </article>
        <aside className="space-y-6">
          <div className="rounded-3xl border border-primary/40 bg-primary/10 p-6 shadow-sm backdrop-blur">
            <h3 className="text-base font-semibold text-foreground">
              Demo Walkthrough
            </h3>
            {project.videoEmbed ? (
              <div
                className="mt-4 overflow-hidden rounded-2xl border border-border/60"
                dangerouslySetInnerHTML={{ __html: project.videoEmbed }}
              />
            ) : (
              <div className="mt-4 flex aspect-video items-center justify-center rounded-2xl border border-dashed border-primary/40 bg-background/70 text-sm text-muted-foreground">
                <div className="flex flex-col items-center gap-3 px-6 text-center">
                  <Play className="size-10 text-primary" />
                  <p>
                    Drop your embed iframe here once the demo is ready to share.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="rounded-3xl border border-border/80 bg-card p-6 shadow-sm">
            <h3 className="text-base font-semibold text-foreground">
              Next Steps
            </h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              {project.nextSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 sm:px-10">
        <div className="rounded-3xl border border-border/70 bg-card p-8 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Timeline
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {project.milestones.map((milestone) => (
              <div
                key={milestone.title}
                className="rounded-2xl border border-border/60 bg-background/70 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                  {milestone.title}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
