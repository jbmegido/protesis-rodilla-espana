"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Cuánto cuesta una prótesis de rodilla en España?",
    answer:
      "El precio de una prótesis de rodilla en el sector privado oscila entre 8.000 y 16.000 euros, dependiendo del tipo de prótesis, la clínica elegida, la comunidad autónoma y los servicios incluidos. Este rango incluye la hospitalización, los honorarios del cirujano, el implante, la anestesia y las primeras sesiones de rehabilitación. En el sistema público (SNS), la intervención está completamente cubierta sin coste directo para el paciente, aunque los tiempos de espera pueden ser considerablemente más largos según la comunidad autónoma.",
  },
  {
    question: "¿Cuánto tiempo dura la lista de espera en la Seguridad Social?",
    answer:
      "Los tiempos de espera varían significativamente según la comunidad autónoma, oscilando generalmente entre 120 y 300 días. Regiones como País Vasco o Aragón suelen tener tiempos más cortos (120-180 días), mientras que Andalucía, Cataluña o Galicia pueden presentar esperas más prolongadas (200-300 días). Estos tiempos pueden fluctuar según la época del año, la carga asistencial del hospital asignado y la prioridad clínica del caso. Consulte con su médico de atención primaria para obtener información actualizada sobre su situación específica.",
  },
  {
    question: "¿Cuánto dura una prótesis de rodilla?",
    answer:
      "Las prótesis de rodilla modernas tienen una durabilidad estimada de 15 a 25 años en la mayoría de los casos, aunque algunos estudios reportan implantes funcionando correctamente más de 30 años. La longevidad depende de factores como la edad del paciente al momento de la cirugía, el nivel de actividad física realizada, el peso corporal, la calidad ósea y el correcto seguimiento de las recomendaciones médicas. Evitar deportes de alto impacto y mantener un peso saludable puede prolongar significativamente la vida útil del implante.",
  },
  {
    question: "¿Cuánto tiempo dura la recuperación tras la operación?",
    answer:
      "La recuperación completa suele requerir entre 3 y 6 meses, aunque la mejora continúa hasta el primer año postoperatorio. Los primeros días se pasan en el hospital (2-5 días), donde comienza la movilización precoz con fisioterapia. La mayoría de pacientes pueden caminar con ayuda de muletas o andador a las 24-48 horas. Entre las 6-8 semanas, la mayoría retoma actividades cotidianas básicas como caminar sin apoyo, conducir o realizar tareas domésticas ligeras. La rehabilitación supervisada es fundamental para alcanzar el máximo resultado funcional.",
  },
  {
    question: "¿Es mejor operarse en sanidad pública o privada?",
    answer:
      "Ambas opciones ofrecen resultados clínicos equivalentes, ya que muchos cirujanos de prestigio trabajan simultáneamente en ambos sectores y utilizan técnicas e implantes similares. La elección depende de factores personales: el sistema público no tiene coste económico pero implica listas de espera variables, mientras que el privado ofrece inmediatez en la programación, habitaciones individuales y atención más personalizada a cambio de un desembolso significativo. También debe considerarse si se dispone de seguro privado que pueda cubrir parte o la totalidad del procedimiento.",
  },
  {
    question: "¿Qué tipos de prótesis de rodilla existen?",
    answer:
      "Existen principalmente tres tipos de prótesis. La prótesis total reemplaza las superficies articulares del fémur, tibia y, opcionalmente, la rótula, siendo la más utilizada en artrosis avanzada. La prótesis parcial o unicompartimental sustituye únicamente el compartimento dañado (interno, externo o patelofemoral), conservando más tejido óseo y permitiendo una recuperación más rápida. La prótesis de revisión se emplea para reemplazar implantes previos que han fallado o se han desgastado. Además, existen prótesis a medida fabricadas con tecnología 3D para casos anatómicamente complejos.",
  },
  {
    question: "¿Cuáles son los riesgos de la cirugía de prótesis de rodilla?",
    answer:
      "Como toda intervención quirúrgica mayor, conlleva riesgos que deben conocerse. La infección ocurre en aproximadamente el 1-2% de los casos y puede requerir tratamiento antibiótico prolongado o incluso revisión quirúrgica. La trombosis venosa profunda es otra complicación potencial, prevenida con anticoagulantes y movilización precoz. Otros riesgos incluyen rigidez articular, aflojamiento de la prótesis a largo plazo, lesión de nervios o vasos sanguíneos y reacciones a la anestesia. Sin embargo, es una de las cirugías ortopédicas con mayor tasa de éxito, superando el 95% de resultados satisfactorios.",
  },
  {
    question: "¿A qué edad se recomienda la operación?",
    answer:
      "No existe una edad específica para indicar esta cirugía. La decisión se basa en el grado de dolor, la limitación funcional y el deterioro de la calidad de vida, no en un número de años. Aunque es más frecuente en personas mayores de 60-65 años, pacientes más jóvenes con daño articular severo por artrosis, artritis reumatoide, traumatismos o necrosis ósea pueden ser excelentes candidatos si han agotado tratamientos conservadores. En jóvenes, se valora especialmente que probablemente necesitarán una cirugía de revisión en el futuro.",
  },
  {
    question: "¿Necesitaré rehabilitación después de la operación?",
    answer:
      "Sí, la rehabilitación es absolutamente fundamental para el éxito de la intervención. El programa rehabilitador comienza en el hospital con ejercicios de movilización y deambulación asistida, y continúa de forma ambulatoria durante semanas o meses según la evolución. Incluye ejercicios de recuperación del rango de movimiento articular, fortalecimiento del cuádriceps y musculatura periarticular, entrenamiento del equilibrio y propiocepción, y reeducación de la marcha. Un fisioterapeuta especializado supervisará el proceso. El cumplimiento riguroso del programa de rehabilitación determina en gran medida el resultado funcional final.",
  },
  {
    question: "¿Puedo elegir el hospital donde operarme en la sanidad pública?",
    answer:
      "Existe el derecho a la libre elección de hospital dentro del Sistema Nacional de Salud, aunque las opciones y procedimientos pueden variar según la comunidad autónoma de residencia. Generalmente, puede solicitar ser derivado a hospitales de su comunidad o, en algunos casos, a centros de otras regiones con acuerdos específicos. Es recomendable consultar con su médico de cabecera o el especialista de traumatología sobre las alternativas disponibles, sus tiempos de espera específicos y los requisitos administrativos para ejercer este derecho. Algunos hospitales públicos de referencia tienen tiempos de espera menores para determinadas especialidades.",
  },
]

export function FaqSection() {
  return (
    <section id="preguntas-frecuentes" className="scroll-mt-24 py-8 md:py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Preguntas frecuentes</h2>
      <Accordion type="single" collapsible className="w-full space-y-3">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border border-border rounded-lg px-4 md:px-6 bg-card"
          >
            <AccordionTrigger className="text-left text-base md:text-lg font-medium py-4 hover:no-underline min-h-[60px]">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4 text-base leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

// Export FAQs for JSON-LD schema
export { faqs }
