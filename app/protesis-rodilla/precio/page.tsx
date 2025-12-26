import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Building2, Hospital, Stethoscope, MapPin } from "lucide-react"
import { TableOfContents } from "@/components/pillar/table-of-contents"
import { ContentSection } from "@/components/pillar/content-section"
import { PriceCard } from "@/components/pricing/price-card"
import { FaqPricing } from "@/components/pricing/faq-pricing"

export const metadata: Metadata = {
  title: "Precio de la prótesis de rodilla en España (2025): costes y opciones",
  description:
    "Guía actualizada 2025: precios públicos (gratuito), privados (8.000-16.000€), factores que influyen y diferencias por comunidad autónoma.",
}

const tocItems = [
  { id: "precio-medio", title: "Precio medio en España" },
  { id: "sanidad-publica", title: "Precio en la sanidad pública" },
  { id: "clinicas-privadas", title: "Precio en clínicas privadas" },
  { id: "factores-precio", title: "Factores que influyen" },
  { id: "diferencias-ccaa", title: "Diferencias por CCAA" },
  { id: "precio-calidad", title: "¿El precio afecta a la calidad?" },
  { id: "preguntas-frecuentes", title: "Preguntas frecuentes" },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿El seguro médico cubre la prótesis de rodilla?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La mayoría de seguros médicos privados cubren la cirugía de prótesis de rodilla, aunque las condiciones varían según la póliza. Es recomendable consultar con su aseguradora sobre periodos de carencia, copagos y centros concertados antes de planificar la intervención.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por qué hay tanta diferencia de precio entre clínicas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las diferencias de precio dependen del tipo de prótesis utilizada, la tecnología del centro (cirugía robótica, navegación), la experiencia del equipo quirúrgico, los servicios incluidos (rehabilitación, seguimiento) y la categoría del hospital o clínica.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué incluye normalmente el precio de la operación?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El precio suele incluir honorarios médicos, quirófano, anestesia, estancia hospitalaria, prótesis, medicación durante el ingreso y primeras curas. Algunas clínicas incluyen también sesiones de rehabilitación y seguimiento postoperatorio.",
      },
    },
    {
      "@type": "Question",
      name: "¿Existen opciones de financiación?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, muchas clínicas privadas ofrecen opciones de financiación sin intereses o con plazos extendidos. Algunos centros colaboran con entidades financieras para ofrecer créditos médicos específicos para este tipo de intervenciones.",
      },
    },
    {
      "@type": "Question",
      name: "¿Es más cara una prótesis robótica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La cirugía asistida por robot suele tener un coste adicional habitualmente entre 1.000 y 3.000 euros respecto a la técnica convencional, aunque puede ser superior según centro y tecnología. Este incremento se debe al coste del equipamiento tecnológico y la formación especializada del equipo quirúrgico.",
      },
    },
  ],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Precio de la prótesis de rodilla en España (2025): costes y opciones",
  description:
    "Guía actualizada 2025: precios públicos (gratuito), privados (8.000-16.000€), factores que influyen y diferencias por comunidad autónoma.",
  datePublished: "2025-01-01",
  dateModified: "2025-01-01",
  author: {
    "@type": "Organization",
    name: "Información Cirugía Rodilla España",
  },
}

export default function PrecioProtesisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="min-h-screen bg-background">
        {/* Header with Breadcrumbs */}
        <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <nav className="flex items-center gap-1 text-sm text-muted-foreground flex-wrap" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-foreground transition-colors min-h-[44px] flex items-center">
                Inicio
              </Link>
              <ChevronRight className="w-4 h-4 shrink-0" />
              <Link
                href="/guia-protesis-rodilla"
                className="hover:text-foreground transition-colors min-h-[44px] flex items-center"
              >
                Guía Prótesis
              </Link>
              <ChevronRight className="w-4 h-4 shrink-0" />
              <span className="text-foreground font-medium">Precio</span>
            </nav>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 py-6 md:py-10">
          <div className="flex gap-8 lg:gap-12">
            {/* Sticky TOC - Desktop */}
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-24">
                <TableOfContents items={tocItems} />
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 min-w-0">
              {/* Hero */}
              <div className="mb-8 md:mb-12">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
                  ¿Cuánto cuesta una prótesis de rodilla en España?
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                  Guía actualizada 2025 con información sobre precios en el sistema público y privado, factores que
                  influyen en el coste y diferencias por comunidad autónoma.
                </p>
                <p className="text-sm text-muted-foreground mt-4 italic">
                  Contenido elaborado con fines informativos a partir de fuentes sanitarias públicas y práctica clínica
                  habitual en España.
                </p>
              </div>

              {/* Section 1: Precio medio */}
              <ContentSection
                id="precio-medio"
                title="Precio medio en España"
                imageSrc="/medical-costs-calculator-healthcare-spain.jpg"
                imageAlt="Costes médicos y estimaciones orientativas"
              >
                <p>
                  El precio de una prótesis de rodilla en España varía significativamente dependiendo de si la
                  intervención se realiza en el sistema público de salud o en una clínica privada. Esta diferencia
                  económica es uno de los factores clave que los pacientes consideran al planificar su cirugía.
                </p>
                <p>
                  En el <strong>sistema público</strong>, la cirugía no tiene coste directo para el paciente al estar
                  cubierta por la Seguridad Social. En el <strong>sector privado</strong>, los precios oscilan
                  habitualmente entre 8.000 y 16.000 euros, aunque pueden variar según múltiples factores.
                </p>
                <h3 className="text-lg font-semibold mt-6 mb-3">Puntos clave</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Sistema público: 0 € (coste directo para el paciente)</li>
                  <li>Sector privado: rango orientativo de 8.000 € a 16.000 €</li>
                  <li>Los precios varían según comunidad autónoma y centro</li>
                  <li>El tipo de prótesis y tecnología influyen en el coste final</li>
                  <li>Muchas clínicas ofrecen opciones de financiación</li>
                </ul>
              </ContentSection>

              {/* Section 2: Sanidad pública */}
              <section id="sanidad-publica" className="scroll-mt-24 py-8 md:py-12 border-b border-border">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Precio en la sanidad pública</h2>
                <div className="grid gap-6 md:grid-cols-2 mb-6">
                  <PriceCard
                    icon={<Hospital className="w-5 h-5 text-primary" />}
                    title="Sistema Nacional de Salud"
                    price="0 € coste directo"
                    variant="primary"
                  >
                    <p>
                      La cirugía está cubierta completamente por la Seguridad Social para pacientes con derecho a
                      asistencia sanitaria pública.
                    </p>
                  </PriceCard>
                  <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden rounded-xl bg-muted">
                    <Image
                      src="/spanish-public-hospital-building-modern.jpg"
                      alt="Hospital público español"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="prose prose-slate max-w-none">
                  <p>
                    En el sistema público español, la cirugía de prótesis de rodilla no supone ningún coste económico
                    directo para el paciente. La intervención, incluyendo la prótesis, la estancia hospitalaria y el
                    seguimiento postoperatorio, está financiada a través de las cotizaciones a la Seguridad Social.
                  </p>
                  <h3 className="text-lg font-semibold mt-6 mb-3">Qué incluye</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Consultas preoperatorias y pruebas diagnósticas</li>
                    <li>Intervención quirúrgica completa</li>
                    <li>Prótesis e implantes</li>
                    <li>Estancia hospitalaria (habitualmente 3-5 días)</li>
                    <li>Medicación durante el ingreso</li>
                    <li>
                      Rehabilitación básica y seguimiento según protocolos del centro y disponibilidad del servicio
                    </li>
                  </ul>
                  <p className="mt-4">
                    El principal inconveniente del sistema público son los <strong>tiempos de espera</strong>, que
                    varían considerablemente entre comunidades autónomas. Según datos del Ministerio de Sanidad, la
                    espera media para cirugía traumatológica puede oscilar entre varios meses y más de un año
                    dependiendo de la región y la urgencia del caso.
                  </p>
                </div>
              </section>

              {/* Section 3: Clínicas privadas */}
              <section id="clinicas-privadas" className="scroll-mt-24 py-8 md:py-12 border-b border-border">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Precio en clínicas privadas</h2>
                <div className="grid gap-6 md:grid-cols-2 mb-6">
                  <PriceCard
                    icon={<Building2 className="w-5 h-5 text-primary" />}
                    title="Sector privado"
                    price="8.000 € - 16.000 €"
                  >
                    <p>
                      Rango orientativo que varía según el centro, tipo de prótesis, tecnología utilizada y servicios
                      incluidos.
                    </p>
                  </PriceCard>
                  <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden rounded-xl bg-muted">
                    <Image
                      src="/modern-private-clinic-hospital-room-spain.jpg"
                      alt="Habitación de clínica privada moderna"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="prose prose-slate max-w-none">
                  <p>
                    El sector privado ofrece la ventaja de tiempos de espera significativamente menores, habitualmente
                    de semanas en lugar de meses. Los precios incluyen generalmente todos los servicios necesarios para
                    la intervención, aunque es importante solicitar un presupuesto detallado.
                  </p>
                  <h3 className="text-lg font-semibold mt-6 mb-3">Qué suele incluir</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Honorarios del cirujano y equipo médico</li>
                    <li>Uso de quirófano y equipamiento</li>
                    <li>Anestesia y anestesiólogo</li>
                    <li>Prótesis e implantes de calidad certificada</li>
                    <li>Estancia en habitación individual (2-4 días)</li>
                    <li>Medicación y curas postoperatorias</li>
                  </ul>
                  <h3 className="text-lg font-semibold mt-6 mb-3">Factores que encarecen el precio</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Cirugía robótica o navegación por ordenador (habitualmente entre +1.000 y 3.000 €, aunque puede
                      ser superior según centro y tecnología)
                    </li>
                    <li>Prótesis personalizadas o de última generación</li>
                    <li>Estancias prolongadas o complicaciones</li>
                    <li>Programas de rehabilitación intensiva incluidos</li>
                    <li>Centros de alta especialización o renombre</li>
                  </ul>
                </div>
              </section>

              {/* Section 4: Factores que influyen */}
              <ContentSection
                id="factores-precio"
                title="Factores que influyen en el precio"
                imageSrc="/medical-technology-knee-prosthesis-types-compariso.jpg"
                imageAlt="Diferentes tipos de prótesis de rodilla y tecnología médica"
              >
                <p>
                  El coste final de una prótesis de rodilla depende de múltiples variables que pueden hacer que el
                  precio varíe significativamente entre diferentes centros y pacientes. Comprender estos factores ayuda
                  a evaluar mejor los presupuestos recibidos.
                </p>
                <h3 className="text-lg font-semibold mt-6 mb-3">Principales factores</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Tipo de prótesis:</strong> Las prótesis estándar tienen menor coste que las personalizadas o
                    las fabricadas con materiales premium. Las prótesis parciales suelen ser más económicas que las
                    totales.
                  </li>
                  <li>
                    <strong>Técnica quirúrgica:</strong> La cirugía convencional es más económica que la asistida por
                    robot o con sistemas de navegación computerizada, aunque estas tecnologías pueden ofrecer mayor
                    precisión.
                  </li>
                  <li>
                    <strong>Estancia hospitalaria:</strong> El número de días de ingreso afecta directamente al coste.
                    Las técnicas mínimamente invasivas pueden reducir la estancia y, por tanto, el precio.
                  </li>
                  <li>
                    <strong>Rehabilitación incluida:</strong> Algunos centros incluyen un programa de rehabilitación
                    completo, mientras otros solo ofrecen las primeras sesiones o lo cobran aparte.
                  </li>
                </ul>
              </ContentSection>

              {/* Section 5: Diferencias por CCAA */}
              <section id="diferencias-ccaa" className="scroll-mt-24 py-8 md:py-12 border-b border-border">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Diferencias de precio por comunidad autónoma
                </h2>
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-muted mb-6">
                  <Image
                    src="/spain-map-regions-autonomous-communities-medical.jpg"
                    alt="Mapa de comunidades autónomas de España"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="prose prose-slate max-w-none">
                  <p>
                    Los precios en el sector privado y los tiempos de espera en el sistema público varían
                    considerablemente entre las distintas comunidades autónomas españolas. Factores como la
                    concentración de centros especializados, el coste de vida de la región y la oferta sanitaria
                    disponible influyen en estas diferencias.
                  </p>
                  <p>
                    Comunidades como Madrid, Cataluña y País Vasco, con mayor densidad de clínicas especializadas,
                    pueden ofrecer mayor variedad de opciones, desde centros con precios competitivos hasta clínicas de
                    alta especialización con tarifas superiores.
                  </p>
                  <div className="mt-6 p-6 bg-muted/50 rounded-xl">
                    <p className="text-muted-foreground mb-4">
                      <strong>Próximamente:</strong> Artículos específicos con información detallada por comunidad
                      autónoma sobre precios orientativos, tiempos de espera y centros de referencia.
                    </p>
                    <Link
                      href="/ccaa-provincias/"
                      className="inline-flex items-center gap-2 text-primary hover:underline font-medium min-h-[44px]"
                    >
                      <MapPin className="w-4 h-4" />
                      Ver información por CCAA y provincias
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </section>

              {/* Section 6: Precio y calidad */}
              <ContentSection
                id="precio-calidad"
                title="¿El precio afecta a la calidad?"
                imageSrc="/orthopedic-surgeon-doctor-consultation-patient-tru.jpg"
                imageAlt="Cirujano ortopédico en consulta con paciente"
              >
                <p>
                  Una preocupación frecuente entre los pacientes es si un precio más bajo implica necesariamente una
                  menor calidad de la intervención. La respuesta, en términos generales, es tranquilizadora: la calidad
                  asistencial en España, tanto en el sector público como en el privado, está sujeta a estrictos
                  controles y regulaciones.
                </p>
                <p>
                  Los cirujanos ortopédicos que realizan estas intervenciones tienen una formación homogénea y de alto
                  nivel, y muchos profesionales de prestigio trabajan simultáneamente en hospitales públicos y clínicas
                  privadas. Las prótesis utilizadas en ambos sectores deben cumplir los mismos estándares de calidad y
                  seguridad certificados por la Unión Europea.
                </p>
                <p>
                  Las diferencias de precio suelen reflejar aspectos como las comodidades hoteleras, los tiempos de
                  espera, la tecnología disponible o los servicios adicionales, más que la competencia del equipo
                  quirúrgico o la calidad del implante básico.
                </p>
                <blockquote className="border-l-4 border-primary pl-4 py-2 my-6 bg-muted/30 rounded-r-lg">
                  <p className="italic text-muted-foreground">
                    "La calidad de la cirugía ortopédica en España es homogénea y de alto nivel en todo el territorio.
                    Lo importante es elegir un equipo con experiencia demostrada, independientemente del sector."
                  </p>
                  <cite className="text-sm text-muted-foreground mt-2 block">
                    — Orientación general de especialistas en traumatología
                  </cite>
                </blockquote>
              </ContentSection>

              {/* FAQ Section */}
              <FaqPricing />

              <div className="mt-8 p-6 bg-muted/30 rounded-xl border border-border">
                <p className="text-muted-foreground mb-3">
                  Para más información sobre el procedimiento completo, tipos de prótesis y proceso de recuperación:
                </p>
                <Link
                  href="/guia-protesis-rodilla"
                  className="inline-flex items-center gap-2 text-primary hover:underline font-medium min-h-[44px]"
                >
                  Guía Completa Prótesis de Rodilla España 2025
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Footer */}
              <footer className="mt-12 py-6 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  Información orientativa. No constituye presupuesto ni consejo médico. Los costes reales deben
                  confirmarse siempre directamente con el centro sanitario correspondiente.
                </p>
              </footer>
            </main>
          </div>
        </div>

        {/* Floating CTA Button */}
        <div className="fixed bottom-6 right-6 z-40">
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors min-h-[44px] font-medium"
            aria-label="Contactar especialista"
          >
            <Stethoscope className="w-5 h-5" />
            <span className="hidden sm:inline">Contactar especialista</span>
          </Link>
        </div>
      </div>
    </>
  )
}
