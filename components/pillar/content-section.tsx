import Image from "next/image"
import type { ReactNode } from "react"

interface ContentSectionProps {
  id: string
  title: string
  imageSrc: string
  imageAlt: string
  children: ReactNode
}

export function ContentSection({ id, title, imageSrc, imageAlt, children }: ContentSectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-8 md:py-12 border-b border-border last:border-b-0">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">{title}</h2>
      <div className="grid gap-6 md:gap-8">
        <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-xl bg-muted">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
          />
        </div>
        <div className="prose prose-slate max-w-none">{children}</div>
      </div>
    </section>
  )
}
