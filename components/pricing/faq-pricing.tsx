"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const pricingFaqs = [
  {
    question: "¿El seguro médico cubre la prótesis de rodilla?",
    answer:
      "La mayoría de seguros médicos privados cubren la cirugía de prótesis de rodilla, aunque las condiciones varían según la póliza. Es recomendable consultar con su aseguradora sobre periodos de carencia, copagos y centros concertados antes de planificar la intervención.",
  },
  {
    question: "¿Por qué hay tanta diferencia de precio entre clínicas?",
    answer:
      "Las diferencias de precio dependen del tipo de prótesis utilizada, la tecnología del centro (cirugía robótica, navegación), la experiencia del equipo quirúrgico, los servicios incluidos (rehabilitación, seguimiento) y la categoría del hospital o clínica.",
  },
  {
    question: "¿Qué incluye normalmente el precio de la operación?",
    answer:
      "El precio suele incluir honorarios médicos, quirófano, anestesia, estancia hospitalaria, prótesis, medicación durante el ingreso y primeras curas. Algunas clínicas incluyen también sesiones de rehabilitación y seguimiento postoperatorio.",
  },
  {
    question: "¿Existen opciones de financiación?",
    answer:
      "Sí, muchas clínicas privadas ofrecen opciones de financiación sin intereses o con plazos extendidos. Algunos centros colaboran con entidades financieras para ofrecer créditos médicos específicos para este tipo de intervenciones.",
  },
  {
    question: "¿Es más cara una prótesis robótica?",
    answer:
      "La cirugía asistida por robot suele tener un coste adicional habitualmente entre 1.000 y 3.000 euros respecto a la técnica convencional, aunque puede ser superior según centro y tecnología. Este incremento se debe al coste del equipamiento tecnológico y la formación especializada del equipo quirúrgico.",
  },
]

export function FaqPricing() {
  return (
    <section id="preguntas-frecuentes" className="scroll-mt-24 py-8 md:py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Preguntas frecuentes sobre precios</h2>
      <Accordion type="single" collapsible className="w-full">
        {pricingFaqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-base md:text-lg min-h-[44px]">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
