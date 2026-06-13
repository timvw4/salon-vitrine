/*
 * TikTokIcon : le vrai logo TikTok sous forme de SVG.
 *
 * Pourquoi un SVG « maison » plutot que lucide-react ?
 * -> lucide-react ne fournit pas les logos de marques (TikTok, etc.).
 *    Plutot que d'ajouter une nouvelle dependance (react-icons), on dessine
 *    directement l'icone ici : plus leger et aucune installation requise.
 *
 * L'icone herite de la couleur du texte parent (fill="currentColor"),
 * exactement comme les icones lucide-react, donc elle s'integre partout.
 */
export default function TikTokIcon({
  size = 18,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.6 5.82a4.28 4.28 0 0 1-1.05-2.82h-3.2v12.62a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 1 1 .73-5.07V9.78a5.77 5.77 0 0 0-.73-.05 5.79 5.79 0 1 0 5.79 5.79V9.01a7.45 7.45 0 0 0 4.35 1.39V7.2a4.28 4.28 0 0 1-3.3-1.38z" />
    </svg>
  );
}
