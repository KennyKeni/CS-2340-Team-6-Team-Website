import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

export function NotFoundPage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 px-6 py-24 text-center sm:px-10">
      <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">
        Lost in the UI
      </h1>
      <p className="text-sm text-muted-foreground">
        The page you are looking for does not exist yet. Head back to the home
        page to explore our project and team.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-5 py-2 text-sm font-medium text-foreground transition hover:border-primary/40 hover:text-primary"
      >
        <ArrowLeft className="size-4" />
        Return home
      </Link>
    </div>
  )
}
