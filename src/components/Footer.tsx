import { Instagram, Facebook } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import TikTokIcon from "@/components/TikTokIcon";

/*
 * Footer : navigation, resume des horaires, reseaux, mentions legales,
 * et la signature "Site realise par ...".
 */

const footerLinks = [
  { label: "Prestations", href: "#prestations" },
  { label: "Galerie", href: "#galerie" },
  { label: "À propos", href: "#a-propos" },
  { label: "Réservation", href: "#reservation" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {/* Bloc identite */}
        <div>
          <h3 className="font-serif text-2xl font-bold">
            {siteConfig.identity.name}
          </h3>
          <p className="mt-3 max-w-xs text-sm text-white/70">
            {siteConfig.identity.shortDescription}
          </p>
          <div className="mt-5 flex gap-3">
            {siteConfig.social.instagram && (
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-secondary"
              >
                <Instagram size={18} />
              </a>
            )}
            {siteConfig.social.facebook && (
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-secondary"
              >
                <Facebook size={18} />
              </a>
            )}
            {siteConfig.social.tiktok && (
              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-secondary"
              >
                <TikTokIcon size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav aria-label="Navigation du pied de page">
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-secondary">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Resume des horaires */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-secondary">
            Horaires
          </h4>
          <ul className="space-y-1.5 text-sm text-white/70">
            {siteConfig.openingHours.map((day) => (
              <li key={day.jour} className="flex justify-between gap-4">
                <span>{day.jour}</span>
                <span>{day.heures}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Barre du bas */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {year} {siteConfig.identity.name}. Tous droits réservés.{" "}
            {/* Lien mentions legales (placeholder a remplacer). */}
            <a href="#" className="underline transition-colors hover:text-white">
              Mentions légales
            </a>
          </p>
          <p>
            Site réalisé par{" "}
            <span className="font-medium text-white/70">{siteConfig.madeBy}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
