import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"

import type { TeamMember } from "../../data/team"

type TeamSectionProps = {
  members: TeamMember[]
}

export function TeamSection({ members }: TeamSectionProps) {
  return (
    <section
      id="team"
      className="border-y border-border/60 bg-muted/40 py-16 sm:py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Team
            </span>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              Meet the people behind the project
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Meet the teammates behind each sprint deliverable, plus the Georgia Tech emails to reach them with questions.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <article
              key={member.email}
              className="flex h-full flex-col justify-between rounded-3xl border border-border/70 bg-card p-6 shadow-sm transition hover:border-primary/40 hover:shadow-md"
            >
              <div className="space-y-3">
                <div className="inline-flex size-12 items-center justify-center rounded-2xl border border-border/60 bg-muted/60 text-lg font-semibold text-primary">
                  {member.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {member.focus || member.contributions || "Contributions coming soon."}
                </p>
              </div>
              <a
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:text-primary/80"
                href={`mailto:${member.email}`}
              >
                {member.email}
                <ArrowUpRight className="size-4" />
              </a>
            </article>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            to="/team"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/20"
          >
            Meet the full team
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
