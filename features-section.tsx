import { CheckCircle2 } from "lucide-react"

const features = [
  "Guías paso a paso procedimiento",
  "Tiempos reales listas espera SNS",
  "Mejores clínicas por CCAA",
  "Recuperación y fisioterapia",
]

export function FeaturesSection() {
  return (
    <section className="w-full py-10 md:py-16 px-4 bg-secondary/50">
      <div className="max-w-3xl mx-auto">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-base md:text-lg text-card-foreground font-medium">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
