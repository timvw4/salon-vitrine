# Maison Lumière — Site vitrine premium pour salon de coiffure / institut de beauté

Site vitrine **one-page**, élégant et responsive, conçu pour un salon de coiffure
ou un institut de beauté. Tout le contenu (textes, prix, couleurs, photos, lien de
réservation) se modifie depuis **un seul fichier**.

Construit avec **Next.js (App Router) + TypeScript + Tailwind CSS** et `lucide-react`
pour les icônes. Léger, rapide et optimisé pour le **référencement local Google**.

---

## 1. Prérequis

- [Node.js](https://nodejs.org/) version **18.18 ou supérieure** (LTS recommandée).
- Un terminal (l'application « Terminal » sur Mac, par exemple).

Pour vérifier ta version de Node :

```bash
node -v
```

---

## 2. Installation

Place-toi dans le dossier du projet, puis installe les dépendances :

```bash
cd salon-vitrine
npm install
```

Cette commande télécharge tout ce dont le projet a besoin (à faire une seule fois).

---

## 3. Lancer le site en mode développement

```bash
npm run dev
```

Ouvre ensuite ton navigateur à l'adresse affichée (généralement
**http://localhost:3000**). Le site se recharge tout seul à chaque modification.

---

## 4. Construire la version de production

Pour générer la version optimisée (celle qu'on met en ligne) :

```bash
npm run build
npm run start
```

- `npm run build` : prépare et optimise le site.
- `npm run start` : lance la version optimisée en local pour la tester.

---

## 5. Comment adapter le site à un NOUVEAU CLIENT

> **L'essentiel à retenir : tu ne modifies qu'UN SEUL fichier.**

Tout le contenu éditable vit dans :

```
src/config/site.config.ts
```

Ouvre ce fichier et modifie les valeurs dans la section **« 2) CONTENU DU SITE »**.
Tu peux y changer, sans toucher au reste du code :

| Élément              | Où le modifier dans `site.config.ts`           |
| -------------------- | ---------------------------------------------- |
| Nom, slogan, intro   | `identity`                                     |
| Couleurs de la marque| `colors` (rebranding instantané)               |
| Adresse, tél, email  | `contact`                                      |
| Carte Google Maps    | `contact.googleMapsEmbed`                      |
| Horaires             | `openingHours`                                 |
| Prestations & prix   | `services`                                     |
| Photos de la galerie | `gallery`                                      |
| Avis clients         | `testimonials`                                 |
| Texte « À propos »   | `about`                                        |
| Réseaux sociaux      | `social`                                       |
| Note Google          | `googleRating`                                 |
| Réservation en ligne | `bookingEmbedUrl`                              |
| Signature du créateur| `madeBy`                                       |

### Changer les couleurs (rebranding)

Dans `colors`, modifie simplement les codes couleur (format `#RRGGBB`).
Tout le site (boutons, titres, accents) s'adapte automatiquement.

### Remplacer les photos par les vraies photos du client

1. Dépose les images du client dans le dossier `public/` (par ex. `public/gallery/`).
2. Dans `site.config.ts`, remplace l'URL de l'image par un chemin local, par exemple :

```ts
{ src: "/gallery/ma-photo.jpg", alt: "Description de la photo" }
```

> Pense toujours à remplir le champ `alt` (description de l'image) : c'est important
> pour l'accessibilité et le SEO.

### Activer la réservation en ligne

Dans `site.config.ts`, renseigne `bookingEmbedUrl` avec l'URL d'intégration
(« widget » / « embed ») du module du client :
**Salonkee, Planity, Booksy, Treatwell ou Calendly**.

- Si le champ est **vide**, un encart « Module de réservation à intégrer ici »
  s'affiche automatiquement à la place.
- Dès qu'une URL est renseignée, le vrai module de réservation s'affiche.

### À faire lors de la mise en ligne (SEO)

Dans `src/app/robots.ts` et `src/app/sitemap.ts`, remplace l'URL
`https://www.exemple-salon.ch` par le **vrai nom de domaine** du client.

---

## 6. Structure du projet

```
salon-vitrine/
├── public/                      # Images locales (vraies photos du client)
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Structure globale, polices, SEO, JSON-LD
│   │   ├── page.tsx             # Assemble toutes les sections
│   │   ├── globals.css          # Styles globaux + variables de couleur
│   │   ├── icon.svg             # Favicon
│   │   ├── robots.ts            # robots.txt (SEO)
│   │   └── sitemap.ts           # sitemap.xml (SEO)
│   ├── components/              # Tous les composants d'affichage
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Gallery.tsx
│   │   ├── About.tsx
│   │   ├── Testimonials.tsx
│   │   ├── BookingEmbed.tsx     # Module de réservation dédié
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── FloatingActions.tsx  # Barre flottante mobile
│   │   ├── SectionHeading.tsx
│   │   ├── Reveal.tsx           # Animation d'apparition au scroll
│   │   └── JsonLd.tsx           # Données structurées SEO local
│   └── config/
│       └── site.config.ts       # ⭐ LE SEUL FICHIER À MODIFIER
└── ...fichiers de configuration
```

---

## 7. Points forts

- **Mobile-first** et 100 % responsive.
- **Design premium** : typographie serif élégante + sans-serif lisible, espaces aérés.
- **Animations douces** à l'apparition des sections.
- **SEO local** : métadonnées complètes, Open Graph, et données structurées
  schema.org de type `HairSalon` (nom, adresse, téléphone, horaires).
- **Accessibilité** : HTML sémantique, attributs `alt`, focus visible, bon contraste.
- **Performance** : images optimisées via `next/image`, polices optimisées via `next/font`.

---

Site réalisé par **Tim V** (à personnaliser dans `site.config.ts`, champ `madeBy`).
