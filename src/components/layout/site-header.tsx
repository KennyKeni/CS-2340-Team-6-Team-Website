import { ArrowUpRight, ChevronDown } from "lucide-react"
import {
  Link,
  NavLink,
  useLocation,
} from "react-router-dom"
import { useEffect, useRef, useState } from "react"

import { projects } from "../../data/projects"
import { siteInfo } from "../../data/site"

export function SiteHeader() {
  const location = useLocation()
  const featuredProject = projects[0]
  const projectHref = featuredProject ? `/projects/${featuredProject.slug}` : "/"
  const [projectMenuOpen, setProjectMenuOpen] = useState(false)
  const projectMenuRef = useRef<HTMLDivElement>(null)
  const [isHeaderAtTop, setIsHeaderAtTop] = useState(true)
  const [isDesktop, setIsDesktop] = useState(false)

  const isProjectRouteActive = location.pathname.startsWith("/projects")

  useEffect(() => {
    setProjectMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        projectMenuRef.current &&
        !projectMenuRef.current.contains(event.target as Node)
      ) {
        setProjectMenuOpen(false)
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setProjectMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleEscape)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [])

  useEffect(() => {
    function updateIsDesktop() {
      setIsDesktop(window.matchMedia("(min-width: 768px)").matches)
    }

    function handleScroll() {
      setIsHeaderAtTop(window.scrollY < 10)
    }

    updateIsDesktop()
    handleScroll()

    window.addEventListener("resize", updateIsDesktop)
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("resize", updateIsDesktop)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-10">
        <Link to="/" className="flex flex-col text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            {siteInfo.course} · {siteInfo.semester}
          </span>
          <span className="text-sm font-medium text-foreground">
            {siteInfo.teamName} · {siteInfo.university}
          </span>
        </Link>
        <nav className="flex w-full flex-wrap items-center justify-end gap-4 text-sm font-medium sm:w-auto sm:flex-nowrap sm:justify-start sm:gap-7">
          <NavLink
            to="/"
            className={({ isActive }) =>
              [
                "transition-colors",
                isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
              ].join(" ")
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/team"
            className={({ isActive }) =>
              [
                "transition-colors",
                isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
              ].join(" ")
            }
          >
            Team
          </NavLink>
          {projects.length > 0 && (
            <div className="relative" ref={projectMenuRef}>
              <button
                type="button"
                onClick={() => setProjectMenuOpen((open) => !open)}
                className={[
                  "inline-flex items-center gap-1 rounded-full px-3 py-1 transition-colors",
                  isProjectRouteActive || projectMenuOpen
                    ? "bg-primary/10 text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                ].join(" ")}
                aria-haspopup="menu"
                aria-expanded={projectMenuOpen}
              >
                Projects
                <ChevronDown
                  className={[
                    "size-4 transition-transform",
                    projectMenuOpen ? "rotate-180" : "",
                  ].join(" ")}
                />
              </button>
              {projectMenuOpen && (
                <div className="absolute right-0 top-full mt-3 w-64 rounded-2xl border border-border/60 bg-card p-2 shadow-lg">
                  <div className="flex flex-col divide-y divide-border/60">
                    {projects.map((project) => (
                      <Link
                        key={project.slug}
                        to={`/projects/${project.slug}`}
                        className="group flex flex-col gap-1 rounded-xl px-3 py-3 text-left transition hover:bg-muted/60"
                      >
                        <span className="text-sm font-semibold text-foreground group-hover:text-primary">
                          {project.title}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {project.tagline}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </nav>
        {featuredProject && (isDesktop || isHeaderAtTop) && (
          <Link
            to={projectHref}
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20 sm:w-auto"
          >
            View featured project
            <ArrowUpRight className="size-4" />
          </Link>
        )}
      </div>
    </header>
  )
}
