import { Info } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full py-8 px-4 border-t border-border bg-card">
      <div className="max-w-3xl mx-auto flex items-start gap-3 justify-center text-center">
        <Info className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
        <p className="text-sm md:text-base text-muted-foreground">
          Información de carácter general. Este sitio no sustituye la consulta con profesionales sanitarios
          cualificados.
        </p>
      </div>
    </footer>
  )
}
