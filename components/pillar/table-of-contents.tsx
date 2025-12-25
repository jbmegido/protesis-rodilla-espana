"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface TocItem {
  id: string
  title: string
}

interface TableOfContentsProps {
  items: TocItem[]
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-100px 0px -80% 0px", threshold: 0 },
    )

    items.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [items])

  const handleClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <nav className="space-y-1" aria-label="Tabla de contenidos">
      <h2 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Contenido</h2>
      <ul className="space-y-1">
        {items.map(({ id, title }) => (
          <li key={id}>
            <button
              onClick={() => handleClick(id)}
              className={cn(
                "block w-full text-left text-sm py-2 px-3 rounded-md transition-colors duration-200",
                "min-h-[44px] flex items-center",
                activeId === id
                  ? "bg-primary text-primary-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted",
              )}
            >
              {title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
