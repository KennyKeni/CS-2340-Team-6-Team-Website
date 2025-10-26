import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"

import type { Project } from "../../data/projects"

type AdditionalProjectsProps = {
  projects: Project[]
}

export function AdditionalProjects({ projects }: AdditionalProjectsProps) {
  if (projects.length === 0) {
    return null
  }

  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-20 sm:px-10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Additional Projects
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
            What we&apos;re building next
          </h2>
        </div>
        <p className="max-w-md text-sm text-muted-foreground">
          Explore the initiatives we&apos;re incubating next and track new milestones as they roll out.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            to={`/projects/${project.slug}`}
            className="group flex h-full flex-col justify-between rounded-3xl border border-border/70 bg-card p-6 text-left shadow-sm transition hover:border-primary/40 hover:shadow-md"
          >
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                <span>Exam 3 / Final Voluntary Optional Activity</span>
                {project.status && <span>{project.status}</span>}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {project.tagline}
                </p>
              </div>
              <p className="text-sm text-muted-foreground">{project.summary}</p>
            </div>

            <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary transition group-hover:text-primary/80">
              View details
              <ArrowUpRight className="size-4" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
