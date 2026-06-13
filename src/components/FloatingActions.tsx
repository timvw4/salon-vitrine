"use client";

import { CalendarCheck, Phone } from "lucide-react";
import { siteConfig } from "@/config/site.config";

/*
 * FloatingActions : barre d'actions flottante visible UNIQUEMENT sur mobile.
 * Toujours accessible en bas de l'ecran : "Réserver" + appel rapide.
 * (Cachee sur tablette/desktop ou les boutons du header suffisent.)
 */
export default function FloatingActions() {
  const phoneHref = `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-black/5 bg-white/95 p-3 backdrop-blur md:hidden">
      <a
        href={phoneHref}
        className="flex flex-1 items-center justify-center gap-2 rounded-full border border-primary/20 py-3 font-semibold text-primary"
      >
        <Phone size={18} />
        Appeler
      </a>
      <a
        href="#reservation"
        className="flex flex-[1.5] items-center justify-center gap-2 rounded-full bg-secondary py-3 font-semibold text-white shadow-md"
      >
        <CalendarCheck size={18} />
        Réserver
      </a>
    </div>
  );
}
