"use client";

import { useEffect, useRef, useState } from "react";

/*
 * Reveal : petit composant qui fait apparaitre son contenu en douceur
 * (fondu + leger glissement vers le haut) lorsqu'il devient visible a l'ecran.
 *
 * "use client" en haut signifie que ce composant s'execute dans le navigateur
 * (necessaire car on utilise des animations declenchees par le defilement).
 *
 * Utilisation :
 *   <Reveal>  ... contenu ...  </Reveal>
 *   <Reveal delay={150}> ... </Reveal>   // pour decaler l'apparition (en ms)
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // L'IntersectionObserver detecte quand l'element entre dans l'ecran.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target); // on n'anime qu'une seule fois
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}
