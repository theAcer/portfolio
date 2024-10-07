import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <span className="inline-block font-bold">Samson Njogu</span>
      </Link>
      <nav className="flex gap-6">
        <Link
          href="/projects"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Projects
        </Link>
        <Link
          href="/skills"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Skills
        </Link>
        <Link
          href="/contact"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Contact
        </Link>
      </nav>
    </div>
  )
}