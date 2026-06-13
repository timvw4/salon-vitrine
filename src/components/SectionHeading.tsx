/*
 * Petit composant reutilisable pour les titres de section.
 * Affiche un sur-titre (eyebrow), un grand titre et un sous-titre optionnel,
 * le tout centre et harmonise sur tout le site.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl font-bold text-primary sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base text-ink/70">{subtitle}</p>}
    </div>
  );
}
