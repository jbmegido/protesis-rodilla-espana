import { Activity } from "lucide-react"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 mb-2">
          <Activity className="w-8 h-8 md:w-10 md:h-10 text-primary" strokeWidth={1.5} />
        </div>

        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
          Información completa sobre prótesis de rodilla en España (2025)
        </h1>

        <h2 className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium text-pretty max-w-2xl mx-auto">
          Guías informativas, tiempos de espera y recursos por comunidad autónoma
        </h2>

        <p className="text-base md:text-lg text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed text-pretty">
          Este portal ofrece información general y educativa sobre la cirugía de rodilla en España, incluyendo la
          prótesis de rodilla, el acceso al sistema público y privado, y aspectos relevantes para pacientes que buscan
          orientación previa a una consulta médica.
        </p>
      </div>
    </section>
  )
}
