import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface PriceCardProps {
  icon: ReactNode
  title: string
  price: string
  children: ReactNode
  variant?: "default" | "primary"
}

export function PriceCard({ icon, title, price, children, variant = "default" }: PriceCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl p-6 border",
        variant === "primary" ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border",
      )}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={cn("p-2 rounded-lg", variant === "primary" ? "bg-primary-foreground/20" : "bg-primary/10")}>
          {icon}
        </div>
        <h3
          className={cn("text-lg font-semibold", variant === "primary" ? "text-primary-foreground" : "text-foreground")}
        >
          {title}
        </h3>
      </div>
      <p
        className={cn(
          "text-2xl md:text-3xl font-bold mb-4",
          variant === "primary" ? "text-primary-foreground" : "text-primary",
        )}
      >
        {price}
      </p>
      <div
        className={cn(
          "text-sm space-y-2",
          variant === "primary" ? "text-primary-foreground/90" : "text-muted-foreground",
        )}
      >
        {children}
      </div>
    </div>
  )
}
