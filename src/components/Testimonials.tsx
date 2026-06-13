import { Star, Quote } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

/*
 * Avis : 3 temoignages clients en cartes + un badge "note Google" (placeholder).
 */
export default function Testimonials() {
  return (
    <section id="avis" className="bg-cream py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Témoignages"
          title="Ce que disent nos clients"
        />

        {/* Badge note Google (a remplacer par la vraie note du client) */}
        <div className="mx-auto mb-12 flex w-fit items-center gap-4 rounded-full bg-white px-6 py-3 shadow-sm">
          <span className="font-serif text-3xl font-bold text-primary">
            {siteConfig.googleRating.score}
          </span>
          <div>
            <div className="flex text-secondary" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="text-xs text-ink/60">
              {siteConfig.googleRating.reviewsCount} avis Google
            </p>
          </div>
        </div>

        {/* Cartes de temoignages */}
        <div className="grid gap-6 md:grid-cols-3">
          {siteConfig.testimonials.map((t, index) => (
            <Reveal key={t.nom} delay={index * 100}>
              <figure className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-sm">
                <Quote className="mb-4 text-secondary" size={28} />
                <blockquote className="flex-1 text-base leading-relaxed text-ink/80">
                  “{t.texte}”
                </blockquote>
                <div className="mt-6">
                  <div
                    className="mb-1 flex text-secondary"
                    aria-label={`Note : ${t.note} sur 5`}
                  >
                    {Array.from({ length: t.note }).map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <figcaption className="font-semibold text-primary">
                    {t.nom}
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
