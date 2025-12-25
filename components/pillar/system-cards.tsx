import Link from "next/link"
import { Building2, Landmark } from "lucide-react"
import { cn } from "@/lib/utils"

const cards = [
  {
    title: "Sistema Público",
    description: "Información sobre acceso, proceso de derivación y tiempos de espera en el SNS",
    href: "/publico-vs-privado/",
    icon: Landmark,
  },
  {
    title: "Clínicas Privadas",
    description: "Recursos informativos sobre centros especializados en cirugía de rodilla",
    href: "/clinicas-privadas/",
    icon: Building2,
  },
]

export function SystemCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 mt-8">
      {cards.map((card) => (
        <Link
          key={card.href}
          href={card.href}
          className={cn(
            "group flex items-start gap-4 p-5 md:p-6",
            "bg-primary rounded-xl",
            "shadow-md hover:shadow-xl",
            "transition-all duration-300 ease-out",
            "hover:-translate-y-1",
            "active:scale-[0.98]",
            "min-h-[100px]",
          )}
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-primary-foreground shrink-0">
            <card.icon className="w-6 h-6" strokeWidth={1.5} />
          </div>
          <div>
            <span className="block text-lg font-semibold text-primary-foreground mb-1">{card.title}</span>
            <span className="text-sm text-primary-foreground/80">{card.description}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}
