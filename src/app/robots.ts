import type { MetadataRoute } from "next";

/*
 * robots.txt genere automatiquement par Next.js.
 * Il indique aux moteurs de recherche qu'ils peuvent explorer tout le site.
 *
 * A FAIRE A LA MISE EN LIGNE : remplace l'URL ci-dessous par le vrai domaine
 * du client (ex: "https://www.maison-lumiere.ch").
 */
const SITE_URL = "https://www.exemple-salon.ch";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
