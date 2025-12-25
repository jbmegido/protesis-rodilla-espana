import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { TableOfContents } from "@/components/pillar/table-of-contents"
import { ContentSection } from "@/components/pillar/content-section"
import { CcaaLinks } from "@/components/pillar/ccaa-links"
import { SystemCards } from "@/components/pillar/system-cards"
import { FaqSection, faqs } from "@/components/pillar/faq-section"

export const metadata: Metadata = {
  title: "Guía Completa Prótesis Rodilla España 2025: Tipos, Procedimiento, Recuperación",
  description:
    "Guía prótesis de rodilla España: qué es, tipos, candidatos, cirugía, recuperación y sistema público/privado.",
}

const tocItems = [
  { id: "que-es-protesis", title: "¿Qué es una prótesis de rodilla?" },
  { id: "tipos-protesis", title: "Tipos de prótesis de rodilla" },
  { id: "candidatos", title: "¿Quién es candidato?" },
  { id: "procedimiento", title: "El procedimiento quirúrgico" },
  { id: "recuperacion", title: "Recuperación y rehabilitación" },
  { id: "informacion-ccaa", title: "Información por CCAA" },
  { id: "publico-privado", title: "Sistema público vs privado" },
  { id: "preguntas-frecuentes", title: "Preguntas frecuentes" },
]

// JSON-LD Schemas
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Guía Completa Prótesis de Rodilla España 2025",
  description:
    "Todo lo que necesita saber sobre la cirugía de reemplazo de rodilla: tipos, procedimiento, recuperación y sistema público/privado en España.",
  about: {
    "@type": "MedicalCondition",
    name: "Artrosis de rodilla",
  },
  mainContentOfPage: {
    "@type": "WebPageElement",
    cssSelector: "main",
  },
  specialty: {
    "@type": "MedicalSpecialty",
    name: "Traumatología y Cirugía Ortopédica",
  },
  audience: {
    "@type": "PeopleAudience",
    audienceType: "Pacientes",
  },
  lastReviewed: "2025-01-01",
}

export default function GuiaProtesisRodillaPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex items-center gap-1 text-sm text-muted-foreground">
            <Link href="/">Inicio</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">Guía Prótesis Rodilla 2025</span>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <main className="flex-1">
          <h1 className="text-4xl font-bold mb-8">
            Guía Completa Prótesis de Rodilla España 2025
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            Información general sobre cirugía de rodilla en España.
          </p>

          <footer className="py-8 border-t mt-12">
            <p className="text-sm text-muted-foreground text-center">
              Información de carácter general. Este sitio no sustituye la consulta médica.
            </p>
          </footer>
        </main>
      </div>
    </div>
  )
}

