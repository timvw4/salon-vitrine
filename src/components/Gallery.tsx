import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

/*
 * Galerie : grille d'images responsive avec un effet de zoom doux au survol.
 * Les images viennent de la config (placeholders pour l'instant).
 */
export default function Gallery() {
  return (
    <section id="galerie" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Galerie"
          title="L'univers du salon"
          subtitle="Un aperçu de notre savoir-faire et de notre ambiance."
        />

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {siteConfig.gallery.map((image, index) => (
            <Reveal key={image.src} delay={index * 70}>
              <div className="group relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 384px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Voile qui apparait au survol pour un rendu premium. */}
                <div className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/20" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
