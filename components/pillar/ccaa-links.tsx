import Link from "next/link"
import { MapPin, Building2 } from "lucide-react"

export function CcaaLinks() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground">Guías específicas por territorio:</h3>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/ccaa-provincias/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium min-h-[44px] transition-colors"
        >
          <MapPin className="w-5 h-5" />
          <span>Precios y esperas por CCAA →</span>
        </Link>
        <Link
          href="/clinicas-privadas/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium min-h-[44px] transition-colors"
        >
          <Building2 className="w-5 h-5" />
          <span>Clínicas privadas destacadas →</span>
        </Link>
      </div>
    </div>
  )
}
