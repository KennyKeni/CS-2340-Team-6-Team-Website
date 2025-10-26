import { siteInfo } from "../../data/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <span>
          {siteInfo.course} · {siteInfo.teamName}
        </span>
        <span>
          If you have any questions email{" "}
          <a
            className="font-medium text-primary hover:text-primary/80"
            href="mailto:klin344@gatech.com"
          >
            klin344@gatech.com
          </a>
          .
        </span>
      </div>
    </footer>
  )
}
