import { siteInfo } from "../../data/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p>
          © {new Date().getFullYear()} {siteInfo.course} Team. All rights
          reserved.
        </p>
        <p>
          Need to reach us? Drop a line at{" "}
          <a
            className="font-medium text-primary hover:text-primary/80"
            href={`mailto:${siteInfo.contactEmail}`}
          >
            {siteInfo.contactEmail}
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
