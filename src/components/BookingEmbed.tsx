import { CalendarCheck, Phone } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import SectionHeading from "@/components/SectionHeading";

/*
 * BookingEmbed : composant DEDIE a la reservation en ligne.
 *
 * - Si une "bookingEmbedUrl" est renseignee dans site.config.ts,
 *   on affiche directement le widget de reservation (iframe).
 * - Sinon, on affiche un placeholder elegant invitant a integrer le module.
 *
 * --> POUR ACTIVER LA RESERVATION :
 *     Coller ici l'embed Salonkee / Planity / Booksy / Treatwell / Calendly
 *     du client, en renseignant "bookingEmbedUrl" dans src/config/site.config.ts.
 *     (Generalement : sur la plateforme du client, chercher "Widget" / "Intégrer"
 *      / "Embed" et copier l'URL fournie.)
 */
export default function BookingEmbed() {
  const hasBooking = siteConfig.bookingEmbedUrl.trim().length > 0;

  return (
    <section id="reservation" className="py-24">
      <div className="mx-auto max-w-4xl px-5">
        <SectionHeading
          eyebrow="Réservation"
          title="Prenez rendez-vous en ligne"
          subtitle="Choisissez votre prestation et votre créneau en quelques clics."
        />

        {hasBooking ? (
          // --- Cas 1 : un module de reservation est configure ---
          <div className="overflow-hidden rounded-3xl border border-black/5 shadow-lg">
            <iframe
              src={siteConfig.bookingEmbedUrl}
              title="Module de réservation en ligne"
              className="h-[720px] w-full"
              loading="lazy"
            />
          </div>
        ) : (
          // --- Cas 2 : aucun module configure -> placeholder stylé ---
          <div className="flex flex-col items-center rounded-3xl border-2 border-dashed border-secondary/40 bg-cream px-6 py-16 text-center">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/15">
              <CalendarCheck className="text-accent" size={30} />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-primary">
              Module de réservation à intégrer ici
            </h3>
            <p className="mt-3 max-w-md text-ink/70">
              Le widget de réservation en ligne (Salonkee, Planity, Booksy,
              Treatwell, Calendly…) s'affichera à cet emplacement une fois
              configuré.
            </p>

            {/* En attendant, on propose la reservation par telephone. */}
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3.5 font-semibold text-white shadow-md transition-transform hover:scale-105"
            >
              <Phone size={18} />
              Réserver par téléphone
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
