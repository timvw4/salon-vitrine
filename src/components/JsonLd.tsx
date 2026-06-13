import { siteConfig } from "@/config/site.config";

/*
 * JSON-LD (donnees structurees schema.org).
 *
 * C'est un petit bloc de donnees invisible pour l'utilisateur, mais lu par Google.
 * Il aide enormement le REFERENCEMENT LOCAL : Google comprend qu'il s'agit d'un
 * salon de beaute, avec son adresse, son telephone et ses horaires. Cela peut
 * faire apparaitre le salon dans les resultats locaux et sur Google Maps.
 *
 * Tout est genere automatiquement depuis site.config.ts : rien a modifier ici.
 */

// Convertit nos horaires "fr" en format attendu par schema.org.
function buildOpeningHours() {
  const dayMap: Record<string, string> = {
    Lundi: "Monday",
    Mardi: "Tuesday",
    Mercredi: "Wednesday",
    Jeudi: "Thursday",
    Vendredi: "Friday",
    Samedi: "Saturday",
    Dimanche: "Sunday",
  };

  return siteConfig.openingHours
    .filter((d) => d.heures.toLowerCase() !== "fermé")
    .map((d) => {
      const [opens, closes] = d.heures.split("-").map((s) => s.trim());
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: dayMap[d.jour] ?? d.jour,
        opens,
        closes,
      };
    });
}

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: siteConfig.identity.name,
    description: siteConfig.identity.shortDescription,
    image: siteConfig.hero.image.src,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    url: siteConfig.contact.googleMapsLink,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      addressLocality: siteConfig.contact.city,
      addressCountry: "CH",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.googleRating.score.replace(",", "."),
      reviewCount: siteConfig.googleRating.reviewsCount,
    },
    openingHoursSpecification: buildOpeningHours(),
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.tiktok,
    ].filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      // dangerouslySetInnerHTML est la maniere recommandee par Next.js
      // pour inserer un bloc JSON-LD dans la page.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
