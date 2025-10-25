import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"

import type { Project } from "../../data/projects"
import { siteInfo } from "../../data/site"

type HomeHeroProps = {
  featuredProject: Project
}

export function HomeHero({ featuredProject }: HomeHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-card/40">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_var(--primary)_0%,_transparent_60%)] opacity-[0.08]" />
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 pb-16 pt-12 sm:px-10 sm:pt-14 lg:pt-20">
        <div className="space-y-6">
          <span className="inline-flex max-w-fit items-center justify-center rounded-full border border-border bg-background/40 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            {siteInfo.university} · {siteInfo.semester}
          </span>
          <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            {siteInfo.teamName}
          </h1>
          <p className="max-w-2xl text-balance text-lg text-muted-foreground">
            {siteInfo.intro}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          {siteInfo.principles.map((principle) => (
            <span
              key={principle}
              className="rounded-full border border-border/80 bg-background px-3 py-1 font-medium text-foreground"
            >
              {principle}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            to={`/projects/${featuredProject.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90"
          >
            Explore {featuredProject.title}
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
