import Image from "next/image";
import { CalendarCheck, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site.config";

/*
 * Hero : la grande zone d'accueil en haut de page.
 * Grande image de fond + nom du salon + slogan + 2 boutons d'action.
 */
export default function Hero() {
  return (
    <section id="accueil" className="relative flex min-h-[100svh] items-center justify-center">
      {/* Image de fond optimisee (next/image). "priority" = chargee en premier. */}
      <Image
        src={siteConfig.hero.image.src}
        alt={siteConfig.hero.image.alt}
        fill
        priority
        sizes="100vw"
        className="scale-105 object-cover blur-[2px]"
      />
      {/*
        Calques sombres pour rendre le texte parfaitement lisible et donner un
        rendu plus haut de gamme :
        1) un voile uni sombre (teinte de marque) sur toute l'image ;
        2) un degrade noir -> transparent -> noir (plus sombre en haut et en bas)
           qui fait ressortir le titre au centre.
      */}
      <div className="absolute inset-0 bg-primary/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/45 to-black/80" />

      {/* Contenu texte (drop-shadow = legere ombre portee pour detacher le texte) */}
      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.45)]">
        <p className="mb-4 animate-fade-up text-sm font-semibold uppercase tracking-[0.3em] text-secondary drop-shadow">
          {siteConfig.contact.city}
        </p>
        <h1 className="animate-fade-up font-serif text-4xl font-bold leading-tight sm:text-6xl">
          {siteConfig.identity.name}
        </h1>
        <p className="mx-auto mt-6 max-w-xl animate-fade-up text-lg text-white sm:text-xl">
          {siteConfig.identity.slogan}
        </p>

        {/* Boutons : CTA principal + CTA secondaires */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#reservation"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-8 py-4 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105 sm:w-auto"
          >
            <CalendarCheck size={20} />
            Réserver
          </a>
          <a
            href={siteConfig.contact.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/70 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-primary sm:w-auto"
          >
            <MapPin size={20} />
            Itinéraire
          </a>
        </div>
      </div>
    </section>
  );
}
