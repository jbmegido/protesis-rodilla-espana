import { HeroSection } from "@/components/hero-section"
import { NavigationCard } from "@/components/navigation-card"
import { Footer } from "@/components/footer"
import { Stethoscope, Scale, Building2, MapPin, HeartPulse } from "lucide-react"

const navigationCards = [
  {
    title: "Guía completa sobre prótesis de rodilla",
    description: "Procedimiento, tipos de prótesis y fases de recuperación",
    href: "/guia-protesis-rodilla/",
    icon: Stethoscope,
  },
  {
    title: "Sistema público vs privado",
    description: "Información comparativa sobre acceso, tiempos de espera y cobertura",
    href: "/publico-vs-privado/",
    icon: Scale,
  },
  {
    title: "Clínicas privadas en España",
    description: "Recursos informativos sobre centros que realizan cirugía de rodilla",
    href: "/clinicas-privadas/",
    icon: Building2,
  },
  {
    title: "Información por comunidad autónoma",
    description: "Datos organizados por territorio",
    href: "/ccaa-provincias/",
    icon: MapPin,
  },
  {
    title: "Recuperación y fisioterapia",
    description: "Información general sobre el proceso postoperatorio",
    href: "/servicios-avanzados/recuperacion/",
    icon: HeartPulse,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">
        <HeroSection />

        <section className="w-full py-8 md:py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {navigationCards.map((card) => (
                <NavigationCard
                  key={card.href}
                  title={card.title}
                  description={card.description}
                  href={card.href}
                  icon={card.icon}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
