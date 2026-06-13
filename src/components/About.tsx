import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import Reveal from "@/components/Reveal";

/*
 * A propos : texte de presentation + image, dans une mise en page
 * chaleureuse a deux colonnes (empilees sur mobile).
 */
export default function About() {
  return (
    <section id="a-propos" className="bg-primary py-24 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        {/* Image */}
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src={siteConfig.about.image.src}
              alt={siteConfig.about.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              className="object-cover"
            />
          </div>
        </Reveal>

        {/* Texte */}
        <Reveal delay={120}>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
              À propos
            </p>
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">
              {siteConfig.about.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/80">
              {siteConfig.about.text}
            </p>
            <p className="mt-8 font-serif text-xl italic text-secondary">
              — {siteConfig.about.teamName}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
