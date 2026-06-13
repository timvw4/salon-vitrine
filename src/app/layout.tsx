import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site.config";
import JsonLd from "@/components/JsonLd";

/*
 * POLICES (via next/font) :
 * - Playfair Display : police "serif" elegante pour les titres.
 * - Montserrat : police "sans-serif" propre et lisible pour le texte.
 * next/font les optimise automatiquement (pas de ralentissement, pas de requete
 * externe au chargement). Chaque police expose une "variable CSS" reutilisable.
 */
const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

/*
 * METADONNEES SEO :
 * Title, description et Open Graph (apercu lors d'un partage sur les reseaux).
 * Tout est tire de la config => rien a modifier ici pour un nouveau client.
 */
export const metadata: Metadata = {
  title: `${siteConfig.identity.name} — ${siteConfig.identity.slogan}`,
  description: siteConfig.identity.shortDescription,
  keywords: [
    "salon de coiffure",
    "institut de beauté",
    "coiffeur",
    siteConfig.contact.city,
    siteConfig.identity.name,
  ],
  openGraph: {
    title: `${siteConfig.identity.name} — ${siteConfig.identity.slogan}`,
    description: siteConfig.identity.shortDescription,
    type: "website",
    locale: "fr_CH",
    siteName: siteConfig.identity.name,
    images: [{ url: siteConfig.hero.image.src }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.identity.name,
    description: siteConfig.identity.shortDescription,
    images: [siteConfig.hero.image.src],
  },
};

// Transforme les couleurs de la config en variables CSS.
// Ces variables sont ensuite utilisees partout (Tailwind: bg-primary, etc.).
const brandStyle = {
  "--color-primary": siteConfig.colors.primary,
  "--color-secondary": siteConfig.colors.secondary,
  "--color-accent": siteConfig.colors.accent,
  "--color-ink": siteConfig.colors.ink,
  "--color-cream": siteConfig.colors.cream,
} as React.CSSProperties;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" style={brandStyle} className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
