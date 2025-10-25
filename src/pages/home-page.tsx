import { AdditionalProjects } from "../components/home/additional-projects"
import { HomeHero } from "../components/home/home-hero"
import { ProjectSpotlight } from "../components/home/project-spotlight"
import { TeamSection } from "../components/home/team-section"
import { projects } from "../data/projects"
import { teamMembers } from "../data/team"

export function HomePage() {
  const featuredProject = projects[0]
  const additionalProjects = projects.slice(1)

  if (!featuredProject) {
    return (
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-6 py-20 text-center sm:px-10">
        <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">
          Welcome to our CS 2340 Team
        </h1>
        <p className="text-sm text-muted-foreground">
          Add a project to <code>src/data/projects.ts</code> to populate the
          homepage with highlights, demo info, and a dedicated project page.
        </p>
      </div>
    )
  }

  return (
    <>
      <HomeHero featuredProject={featuredProject} />
      <ProjectSpotlight project={featuredProject} />
      <AdditionalProjects projects={additionalProjects} />
      <TeamSection members={teamMembers} />
    </>
  )
}
