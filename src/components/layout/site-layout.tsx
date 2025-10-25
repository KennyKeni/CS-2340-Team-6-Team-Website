import type { ReactNode } from "react"

import { SiteFooter } from "./site-footer"
import { SiteHeader } from "./site-header"

type SiteLayoutProps = {
  children: ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}
