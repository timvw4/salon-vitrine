import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import TikTokIcon from "@/components/TikTokIcon";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

/*
 * Contact : coordonnees + horaires + carte Google Maps + reseaux sociaux.
 */
export default function Contact() {
  const phoneHref = `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`;

  return (
    <section id="contact" className="bg-cream py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Contact"
          title="Venez nous rendre visite"
          subtitle="Nous serons ravis de vous accueillir dans notre salon."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Colonne gauche : infos + horaires + reseaux */}
          <Reveal>
            <div className="space-y-8">
              {/* Coordonnees */}
              <div className="space-y-4">
                <a
                  href={siteConfig.contact.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-ink/80 transition-colors hover:text-accent"
                >
                  <MapPin className="mt-1 shrink-0 text-secondary" size={20} />
                  <span>
                    {siteConfig.contact.address}
                    <br />
                    {siteConfig.contact.city}
                  </span>
                </a>
                <a
                  href={phoneHref}
                  className="flex items-center gap-3 text-ink/80 transition-colors hover:text-accent"
                >
                  <Phone className="shrink-0 text-secondary" size={20} />
                  {siteConfig.contact.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-3 text-ink/80 transition-colors hover:text-accent"
                >
                  <Mail className="shrink-0 text-secondary" size={20} />
                  {siteConfig.contact.email}
                </a>
              </div>

              {/* Horaires */}
              <div>
                <h3 className="mb-4 flex items-center gap-2 font-serif text-xl font-semibold text-primary">
                  <Clock size={20} className="text-secondary" />
                  Horaires d'ouverture
                </h3>
                <ul className="divide-y divide-black/5 rounded-2xl bg-white px-5 shadow-sm">
                  {siteConfig.openingHours.map((day) => {
                    const closed = day.heures.toLowerCase() === "fermé";
                    return (
                      <li
                        key={day.jour}
                        className="flex items-center justify-between py-3 text-sm"
                      >
                        <span className="font-medium text-ink">{day.jour}</span>
                        <span className={closed ? "text-ink/40" : "text-ink/70"}>
                          {day.heures}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Reseaux sociaux */}
              <div className="flex gap-3">
                {siteConfig.social.instagram && (
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary shadow-sm transition-colors hover:bg-secondary hover:text-white"
                  >
                    <Instagram size={20} />
                  </a>
                )}
                {siteConfig.social.facebook && (
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary shadow-sm transition-colors hover:bg-secondary hover:text-white"
                  >
                    <Facebook size={20} />
                  </a>
                )}
                {siteConfig.social.tiktok && (
                  <a
                    href={siteConfig.social.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary shadow-sm transition-colors hover:bg-secondary hover:text-white"
                  >
                    <TikTokIcon size={20} />
                  </a>
                )}
              </div>
            </div>
          </Reveal>

          {/* Colonne droite : carte Google Maps */}
          <Reveal delay={120}>
            <div className="h-full min-h-[420px] overflow-hidden rounded-3xl shadow-lg">
              {/* Carte placeholder (Genève). Voir "googleMapsEmbed" dans la config
                  pour mettre la vraie adresse du client. */}
              <iframe
                src={siteConfig.contact.googleMapsEmbed}
                title="Carte de localisation du salon"
                className="h-full w-full"
                style={{ border: 0, minHeight: "420px" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
