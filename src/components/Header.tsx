"use client";

import { useEffect, useState } from "react";
import { Menu, X, CalendarCheck } from "lucide-react";
import { siteConfig } from "@/config/site.config";

/*
 * Header collant (reste en haut au defilement).
 * Contient : le nom du salon (logo texte), la navigation par ancres,
 * et un bouton CTA "Prendre rendez-vous".
 * Sur mobile, la navigation se replie dans un menu burger.
 */

// Liens de navigation : le "href" pointe vers l'id d'une section de la page.
const navLinks = [
  { label: "Prestations", href: "#prestations" },
  { label: "Galerie", href: "#galerie" },
  { label: "À propos", href: "#a-propos" },
  { label: "Avis", href: "#avis" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Ajoute une ombre/fond plus marque une fois qu'on a defile un peu.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5">
        {/* Logo / nom du salon */}
        <a
          href="#accueil"
          className={`font-serif text-xl font-bold tracking-wide transition-colors ${
            scrolled ? "text-primary" : "text-white"
          }`}
        >
          {siteConfig.identity.name}
        </a>

        {/* Navigation (visible a partir de la taille "md" = tablette/desktop) */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-secondary ${
                scrolled ? "text-ink" : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reservation"
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-transform hover:scale-105"
          >
            <CalendarCheck size={16} />
            Prendre rendez-vous
          </a>
        </nav>

        {/* Bouton burger (mobile uniquement) */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          className={`md:hidden ${scrolled ? "text-primary" : "text-white"}`}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menu deroulant mobile */}
      {menuOpen && (
        <nav
          className="mx-4 mt-3 rounded-2xl bg-white p-5 shadow-xl md:hidden"
          aria-label="Navigation mobile"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-base font-medium text-ink hover:text-secondary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#reservation"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-5 py-3 font-semibold text-white"
              >
                <CalendarCheck size={18} />
                Prendre rendez-vous
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
