import Link from "next/link"
import { ChevronRight } from "lucide-react"

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

// AÑADE ESTO justo antes de const faqSchema
const faqs = [
  { question: "Cuánto cuesta prótesis rodilla España?", answer: "8-16k€ privado" },
  { question: "Cuánto dura recuperación?", answer: "3-6 meses" }
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

export default function GuiaProtesisRodillaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }} />

      <div className="min-h-screen bg-background">
        {/* Header with Breadcrumbs */}
        <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <nav className="flex items-center gap-1 text-sm text-muted-foreground" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-foreground transition-colors min-h-[44px] flex items-center">
                Inicio
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground font-medium">Guía Prótesis Rodilla 2025</span>
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
                  Guía Completa Prótesis de Rodilla España 2025
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-4">
                  Todo lo que necesita saber sobre la cirugía de reemplazo de rodilla: tipos, procedimiento,
                  recuperación y sistema público/privado en España.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
                  Este portal ofrece información general y educativa sobre la cirugía de rodilla en España, incluyendo
                  la prótesis de rodilla, el acceso al sistema público y privado, y aspectos relevantes para pacientes
                  que buscan orientación previa a una consulta médica.
                </p>
              </div>

              {/* Mobile TOC */}
              <div className="lg:hidden mb-8 p-4 bg-muted/50 rounded-xl">
                <TableOfContents items={tocItems} />
              </div>

              {/* Section 1: ¿Qué es una prótesis de rodilla? */}
              <ContentSection
                id="que-es-protesis"
                title="¿Qué es una prótesis de rodilla?"
                imageSrc="/knee-prosthesis-implant-medical-illustration.jpg"
                imageAlt="Ilustración médica de una prótesis de rodilla"
              >
                <p>
                  Una prótesis de rodilla, también conocida como artroplastia de rodilla, es un procedimiento quirúrgico
                  en el que se reemplazan las superficies articulares dañadas de la rodilla por componentes artificiales
                  fabricados con materiales biocompatibles como aleaciones metálicas, polietileno de alta densidad y
                  cerámica.
                </p>
                <p>
                  Esta intervención se ha convertido en una de las cirugías ortopédicas más exitosas de la medicina
                  moderna, con más de 700.000 procedimientos realizados anualmente en todo el mundo. En España, se
                  llevan a cabo aproximadamente 50.000 implantes de prótesis de rodilla cada año, tanto en el sistema
                  público como en el privado.
                </p>
                <p>
                  El objetivo principal de la prótesis de rodilla es aliviar el dolor crónico causado por el desgaste
                  articular y restaurar la funcionalidad de la articulación, permitiendo al paciente recuperar su
                  movilidad y mejorar significativamente su calidad de vida. La intervención está indicada
                  principalmente cuando los tratamientos conservadores han dejado de ser eficaces.
                </p>
                <h3 className="text-lg font-semibold mt-6 mb-3">Puntos clave</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Reemplazo de superficies articulares dañadas por componentes artificiales</li>
                  <li>Materiales biocompatibles: titanio, cobalto-cromo y polietileno</li>
                  <li>Más de 50.000 intervenciones anuales en España</li>
                  <li>Tasa de éxito superior al 95% en alivio del dolor</li>
                  <li>Durabilidad media de 15-25 años con los implantes actuales</li>
                </ul>
              </ContentSection>

              {/* Section 2: Tipos de prótesis */}
              <ContentSection
                id="tipos-protesis"
                title="Tipos de prótesis de rodilla"
                imageSrc="/different-types-knee-replacement-prosthesis-compar.jpg"
                imageAlt="Comparación de diferentes tipos de prótesis de rodilla"
              >
                <p>
                  Existen varios tipos de prótesis de rodilla, y la elección del implante más adecuado depende de
                  múltiples factores: el grado de daño articular, la edad del paciente, su nivel de actividad física y
                  las características anatómicas individuales. El cirujano ortopédico evaluará cada caso para recomendar
                  la opción más apropiada.
                </p>
                <p>
                  La <strong>prótesis total de rodilla</strong> es el tipo más común y se utiliza cuando el desgaste
                  afecta a toda la articulación. Reemplaza las superficies del fémur, la tibia y, en ocasiones, la
                  rótula. Es la opción preferida para pacientes con artrosis avanzada que afecta a múltiples
                  compartimentos de la rodilla.
                </p>
                <p>
                  La <strong>prótesis parcial o unicompartimental</strong> está indicada cuando solo uno de los tres
                  compartimentos de la rodilla está dañado. Esta técnica preserva más tejido óseo y ligamentos,
                  permitiendo una recuperación más rápida y un movimiento más natural, aunque requiere que el resto de
                  la articulación esté en buen estado.
                </p>
                <p>
                  Las <strong>prótesis de revisión</strong> se emplean cuando es necesario reemplazar una prótesis
                  anterior que se ha desgastado o ha presentado complicaciones. Son intervenciones más complejas que
                  requieren implantes especiales con mayor anclaje óseo.
                </p>
                <h3 className="text-lg font-semibold mt-6 mb-3">Tipos principales</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Prótesis total:</strong> Reemplazo completo de la articulación
                  </li>
                  <li>
                    <strong>Prótesis parcial:</strong> Solo el compartimento afectado
                  </li>
                  <li>
                    <strong>Prótesis de revisión:</strong> Sustitución de prótesis previa
                  </li>
                  <li>
                    <strong>Prótesis a medida:</strong> Fabricadas específicamente para el paciente
                  </li>
                  <li>
                    <strong>Prótesis robótica:</strong> Implantación asistida por tecnología
                  </li>
                </ul>
              </ContentSection>

              {/* Section 3: Candidatos */}
              <ContentSection
                id="candidatos"
                title="¿Quién es candidato a una prótesis de rodilla?"
                imageSrc="/doctor-consulting-elderly-patient-knee-pain-examin.jpg"
                imageAlt="Médico examinando a un paciente con dolor de rodilla"
              >
                <p>
                  La indicación para una prótesis de rodilla no se basa únicamente en la edad, sino en el impacto que el
                  dolor y la limitación funcional tienen en la vida diaria del paciente. El candidato típico presenta
                  dolor crónico de rodilla que no responde adecuadamente a los tratamientos conservadores como
                  medicación, fisioterapia o infiltraciones.
                </p>
                <p>
                  Los pacientes suelen referir dolor al caminar, subir escaleras o realizar actividades cotidianas,
                  rigidez matutina prolongada, deformidad progresiva de la articulación y una reducción significativa de
                  su calidad de vida. Antes de considerar la cirugía, se agotan las opciones no quirúrgicas durante un
                  período razonable.
                </p>
                <p>
                  Aunque la mayoría de los pacientes intervenidos tienen entre 60 y 80 años, pacientes más jóvenes con
                  daño articular severo también pueden ser candidatos. En estos casos, se valoran especialmente las
                  expectativas de actividad física y la durabilidad esperada del implante, ya que probablemente
                  necesitarán una cirugía de revisión en el futuro.
                </p>
                <p>
                  El estado de salud general es otro factor determinante. Enfermedades como la diabetes no controlada,
                  la obesidad severa o problemas cardiovasculares graves pueden aumentar los riesgos quirúrgicos y deben
                  ser optimizadas antes de la intervención.
                </p>
                <h3 className="text-lg font-semibold mt-6 mb-3">Indicaciones principales</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Artrosis severa con dolor refractario a tratamiento conservador</li>
                  <li>Artritis reumatoide con destrucción articular avanzada</li>
                  <li>Necrosis avascular del hueso</li>
                  <li>Deformidades severas (genu varo o valgo)</li>
                  <li>Fracturas complejas de rodilla no reconstruibles</li>
                </ul>
              </ContentSection>

              {/* Section 4: Procedimiento */}
              <ContentSection
                id="procedimiento"
                title="El procedimiento quirúrgico"
                imageSrc="/orthopedic-surgery-operating-room-knee-replacement.jpg"
                imageAlt="Quirófano durante una operación de prótesis de rodilla"
              >
                <p>
                  La cirugía de prótesis de rodilla se realiza bajo anestesia, que puede ser general o raquídea
                  (epidural), dependiendo de las características del paciente y las preferencias del equipo quirúrgico.
                  La intervención dura habitualmente entre 1 y 2 horas, aunque este tiempo puede variar según la
                  complejidad del caso.
                </p>
                <p>
                  Durante la operación, el cirujano realiza una incisión en la parte anterior de la rodilla para acceder
                  a la articulación. Las superficies óseas dañadas del fémur y la tibia se preparan mediante cortes
                  precisos para recibir los componentes protésicos. Estos se fijan al hueso mediante cemento óseo o
                  mediante un sistema de press-fit que permite el crecimiento óseo hacia la prótesis.
                </p>
                <p>
                  Las técnicas quirúrgicas han evolucionado significativamente en los últimos años. La cirugía asistida
                  por ordenador y los sistemas robóticos permiten una mayor precisión en la alineación de los
                  componentes, lo que puede traducirse en mejores resultados funcionales y mayor durabilidad del
                  implante. La técnica mínimamente invasiva reduce el daño a los tejidos circundantes y puede acelerar
                  la recuperación.
                </p>
                <p>
                  Tras la intervención, el paciente permanece en el hospital entre 2 y 5 días. La movilización precoz es
                  fundamental: en la mayoría de los casos, el paciente comienza a caminar con ayuda de un andador o
                  muletas en las primeras 24-48 horas postoperatorias.
                </p>
                <h3 className="text-lg font-semibold mt-6 mb-3">Fases del procedimiento</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Evaluación preoperatoria y planificación quirúrgica</li>
                  <li>Anestesia y preparación del paciente</li>
                  <li>Acceso quirúrgico y preparación ósea</li>
                  <li>Implantación y fijación de los componentes</li>
                  <li>Cierre y vendaje compresivo</li>
                </ul>
              </ContentSection>

              {/* Section 5: Recuperación */}
              <ContentSection
                id="recuperacion"
                title="Recuperación y rehabilitación"
                imageSrc="/physical-therapy-knee-rehabilitation-elderly-patie.jpg"
                imageAlt="Paciente realizando rehabilitación de rodilla con fisioterapeuta"
              >
                <p>
                  La recuperación tras una prótesis de rodilla es un proceso gradual que requiere compromiso y paciencia
                  por parte del paciente. La rehabilitación comienza en el hospital, donde los fisioterapeutas enseñan
                  los primeros ejercicios y la forma correcta de caminar con ayudas técnicas. El objetivo inicial es
                  recuperar la movilidad básica y prevenir complicaciones.
                </p>
                <p>
                  Durante las primeras semanas tras el alta hospitalaria, el paciente continúa la rehabilitación de
                  forma ambulatoria o domiciliaria. Los ejercicios se centran en recuperar el rango de movimiento de la
                  rodilla, fortalecer la musculatura del cuádriceps y restaurar el equilibrio y la propiocepción. Es
                  normal experimentar dolor e inflamación, que se controlan con medicación y medidas físicas como el
                  frío local.
                </p>
                <p>
                  La mayoría de los pacientes pueden retomar las actividades cotidianas básicas (caminar sin bastón,
                  conducir, tareas domésticas ligeras) entre las 6 y 8 semanas posteriores a la cirugía. Sin embargo, la
                  recuperación completa, incluyendo el máximo beneficio funcional, suele alcanzarse entre los 3 y 6
                  meses, aunque la mejora puede continuar hasta el primer año.
                </p>
                <p>
                  El seguimiento a largo plazo es importante para detectar precozmente cualquier complicación. Se
                  recomiendan revisiones periódicas con el cirujano y radiografías de control para evaluar el estado del
                  implante.
                </p>
                <h3 className="text-lg font-semibold mt-6 mb-3">Cronograma de recuperación</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Días 1-3:</strong> Primeros pasos con andador en el hospital
                  </li>
                  <li>
                    <strong>Semanas 1-2:</strong> Alta hospitalaria, ejercicios en domicilio
                  </li>
                  <li>
                    <strong>Semanas 3-6:</strong> Rehabilitación intensiva, progresión a bastón
                  </li>
                  <li>
                    <strong>Meses 2-3:</strong> Caminar sin ayudas, retorno a actividades ligeras
                  </li>
                  <li>
                    <strong>Meses 3-6:</strong> Recuperación funcional completa
                  </li>
                </ul>
              </ContentSection>

              <section id="informacion-ccaa" className="scroll-mt-24 py-8 md:py-12 border-b border-border">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Información por Comunidad Autónoma
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Los precios en el sector privado y los tiempos de espera en la sanidad pública varían
                  significativamente entre las distintas comunidades autónomas españolas.
                </p>
                <CcaaLinks />
              </section>

              {/* Section 7: Público vs Privado */}
              <section id="publico-privado" className="scroll-mt-24 py-8 md:py-12 border-b border-border">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Sistema público vs sistema privado
                </h2>
                <div className="prose prose-slate max-w-none mb-6">
                  <p>
                    En España, los pacientes pueden acceder a la cirugía de prótesis de rodilla tanto a través del
                    Sistema Nacional de Salud (SNS) como mediante centros privados. Ambas opciones ofrecen resultados
                    clínicos equivalentes, ya que muchos cirujanos de prestigio trabajan simultáneamente en ambos
                    sectores.
                  </p>
                  <p>
                    El <strong>sistema público</strong> ofrece la ventaja de no tener coste directo para el paciente, ya
                    que está financiado por la Seguridad Social. Sin embargo, implica tiempos de espera que pueden
                    oscilar entre varios meses y más de un año dependiendo de la comunidad autónoma. El proceso comienza
                    con la derivación del médico de atención primaria al especialista en traumatología.
                  </p>
                  <p>
                    El <strong>sector privado</strong> permite un acceso más inmediato a la intervención, habitualmente
                    en semanas. Ofrece ventajas como la elección del cirujano, habitaciones individuales y mayor
                    flexibilidad en las fechas.
                  </p>
                  <p>
                    La decisión entre ambas opciones es personal y depende de factores como la urgencia de la
                    intervención, la situación económica, las preferencias sobre el entorno hospitalario y el nivel de
                    dolor o limitación funcional del paciente.
                  </p>
                  <h3 className="text-lg font-semibold mt-6 mb-3">Factores a considerar</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Tiempo de espera vs inmediatez</li>
                    <li>Coste económico y opciones de financiación</li>
                    <li>Elección de profesional y centro</li>
                    <li>Servicios incluidos (rehabilitación, seguimiento)</li>
                    <li>Comodidades hospitalarias</li>
                  </ul>
                  <p className="mt-6">
                    El coste de la prótesis de rodilla en el sector privado y los tiempos de espera en la sanidad
                    pública varían según la comunidad autónoma y el centro. Puede consultar información orientativa
                    sobre precios y diferencias económicas en{" "}
                    <Link href="/protesis-rodilla/precio/" className="text-primary hover:underline font-medium">
                      esta guía específica
                    </Link>
                    .
                  </p>
                </div>
                <SystemCards />
              </section>

              {/* FAQ Section */}
              <FaqSection />

              <footer className="mt-12 py-6 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  Información de carácter general. Este sitio no sustituye la consulta con profesionales sanitarios
                  cualificados.
                </p>
              </footer>
            </main>
          </div>
        </div>
      </div>
    </>
  )
}

