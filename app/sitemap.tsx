import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://protesis-rodilla-espana.netlify.app"

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // Añade aquí el resto de rutas importantes:
    // { url: `${baseUrl}/protesis-rodilla`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    // { url: `${baseUrl}/clinicas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ]
}

