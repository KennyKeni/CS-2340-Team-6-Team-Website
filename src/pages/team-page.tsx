import { ArrowUpRight } from "lucide-react"

import { teamMembers } from "../data/team"

export function TeamPage() {
  return (
    <div className="flex flex-col">
      <section className="border-b border-border/60 bg-muted/40">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 sm:py-24">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Team
          </span>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold text-foreground sm:text-5xl">
            Meet the builders behind every sprint deliverable
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Learn who to reach out to for each part of the project, and capture
            everyone’s core contributions in one place. Update the details in{" "}
            <code>src/data/team.ts</code> as the project evolves.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
          <div className="grid gap-8 sm:grid-cols-2">
            {teamMembers.map((member) => {
              const contributions =
                member.contributions && member.contributions.trim().length > 0
                  ? member.contributions
                  : member.focus && member.focus.trim().length > 0
                    ? member.focus
                    : "Contributions coming soon."
              const bio =
                member.bio && member.bio.trim().length > 0
                  ? member.bio
                  : undefined

              return (
                <article
                  key={member.email}
                  className="flex h-full flex-col gap-6 rounded-3xl border border-border/70 bg-card/80 p-8 shadow-sm backdrop-blur-sm transition hover:border-primary/40 hover:shadow-md"
                >
                  <header className="flex items-start gap-4">
                    <div className="flex size-12 items-center justify-center rounded-2xl border border-border/60 bg-muted/60 text-lg font-semibold text-primary">
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-foreground">
                        {member.name}
                      </h2>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {member.role}
                      </p>
                    </div>
                  </header>
                  <div className="space-y-5 text-sm text-muted-foreground">
                    {bio && (
                      <div>
                        <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground/80">
                          Bio
                        </h3>
                        <p className="mt-2 leading-relaxed text-foreground/80">
                          {bio}
                        </p>
                      </div>
                    )}
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground/80">
                        Contributions
                      </h3>
                      <p className="mt-2 leading-relaxed text-foreground/80">
                        {contributions}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground/80">
                        Contact
                      </h3>
                      <a
                        className="mt-2 inline-flex items-center gap-2 font-medium text-primary transition hover:text-primary/80"
                        href={`mailto:${member.email}`}
                      >
                        {member.email}
                        <ArrowUpRight className="size-4" />
                      </a>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
