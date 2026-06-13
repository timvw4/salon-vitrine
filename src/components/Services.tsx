import { Clock } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

/*
 * Prestations : les services du salon, sous forme de cartes elegantes,
 * automatiquement regroupees par "categorie" depuis la config.
 */
export default function Services() {
  // On regroupe les prestations par categorie.
  // Resultat : { "Coiffure": [...], "Soins du visage": [...], ... }
  const grouped = siteConfig.services.reduce<Record<string, typeof siteConfig.services>>(
    (acc, service) => {
      (acc[service.categorie] ||= []).push(service);
      return acc;
    },
    {}
  );

  const categories = Object.keys(grouped);

  return (
    <section id="prestations" className="bg-cream py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Nos prestations"
          title="Des soins sur-mesure"
          subtitle="Coiffure, esthétique et bien-être réunis pour révéler votre beauté."
        />

        <div className="space-y-16">
          {categories.map((categorie) => (
            <div key={categorie}>
              <h3 className="mb-8 text-center font-serif text-2xl font-semibold text-accent">
                {categorie}
              </h3>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {grouped[categorie].map((service, index) => (
                  <Reveal key={service.nom} delay={index * 80} className="h-full">
                    <article className="group flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                      <div className="mb-3 flex items-start justify-between gap-4">
                        <h4 className="font-serif text-lg font-semibold text-primary">
                          {service.nom}
                        </h4>
                        <span className="whitespace-nowrap rounded-full bg-secondary/15 px-3 py-1 text-sm font-bold text-accent">
                          {service.prix}
                        </span>
                      </div>
                      <p className="mb-4 flex-1 text-sm leading-relaxed text-ink/70">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs font-medium text-ink/50">
                        <Clock size={14} />
                        {service.duree}
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
