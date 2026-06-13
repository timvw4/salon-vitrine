import type { MetadataRoute } from "next";

/*
 * sitemap.xml genere automatiquement par Next.js.
 * Le sitemap aide Google a decouvrir les pages du site.
 *
 * A FAIRE A LA MISE EN LIGNE : remplace l'URL ci-dessous par le vrai domaine.
 */
const SITE_URL = "https://www.exemple-salon.ch";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
