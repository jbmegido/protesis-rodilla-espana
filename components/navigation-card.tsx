import Link from "next/link"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface NavigationCardProps {
  title: string
  description: string
  href: string
  icon: LucideIcon
}

export function NavigationCard({ title, description, href, icon: Icon }: NavigationCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col items-center justify-center gap-3 p-5 md:p-6",
        "min-h-[180px] md:min-h-[200px]",
        "bg-primary rounded-xl",
        "shadow-md hover:shadow-xl",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1",
        "active:scale-[0.98]",
      )}
    >
      <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 text-primary-foreground">
        <Icon className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />
      </div>
      <span className="text-base md:text-lg font-semibold text-primary-foreground text-center text-balance leading-tight">
        {title}
      </span>
      <span className="text-sm text-primary-foreground/80 text-center text-pretty leading-snug">{description}</span>
    </Link>
  )
}
