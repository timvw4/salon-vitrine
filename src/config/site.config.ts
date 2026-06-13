/* =============================================================================
 *  POUR UN NOUVEAU CLIENT : modifier UNIQUEMENT ce fichier
 *  (textes, prix, couleurs, photos, lien de reservation).
 *
 *  Aucune autre partie du code n'a besoin d'etre touchee. Tous les composants
 *  lisent leurs donnees depuis ce fichier "siteConfig" ci-dessous.
 * ============================================================================= */

/* -----------------------------------------------------------------------------
 * 1) TYPES
 * -----------------------------------------------------------------------------
 * Les "types" decrivent la forme attendue des donnees. Ils evitent les erreurs :
 * si tu oublies un champ ou que tu te trompes de type (texte au lieu de nombre),
 * l'editeur te previendra. Tu peux ignorer cette section et aller directement
 * a la partie "2) CONTENU DU SITE" plus bas pour editer les valeurs.
 * --------------------------------------------------------------------------- */

/** Un jour d'ouverture (ex: { jour: "Lundi", heures: "09:00 - 18:00" }). */
export interface OpeningDay {
  jour: string;
  /** Mettre "Ferme" quand le salon est ferme ce jour-la. */
  heures: string;
}

/** Une prestation proposee par le salon. */
export interface Service {
  categorie: string;
  nom: string;
  description: string;
  /** Duree affichee, ex: "45 min", "1h30". */
  duree: string;
  /** Prix affiche, ex: "45 CHF", "des 30 CHF". */
  prix: string;
}

/** Une image de la galerie. */
export interface GalleryImage {
  /** URL de l'image (placeholder distant, OU chemin local comme "/gallery/photo-1.jpg"). */
  src: string;
  /** Texte alternatif : decrit l'image (important pour l'accessibilite et le SEO). */
  alt: string;
}

/** Un temoignage / avis client. */
export interface Testimonial {
  nom: string;
  texte: string;
  /** Note de 1 a 5. */
  note: number;
}

/** Couleurs de la marque. Ce sont elles qui pilotent tout le design. */
export interface BrandColors {
  primary: string;
  secondary: string;
  accent: string;
  /** Couleur du texte principal (encre). */
  ink: string;
  /** Couleur de fond doux (creme). */
  cream: string;
}

/** Forme complete de la configuration du site. */
export interface SiteConfig {
  identity: {
    name: string;
    slogan: string;
    shortDescription: string;
  };
  colors: BrandColors;
  contact: {
    address: string;
    city: string;
    phone: string;
    email: string;
    googleMapsLink: string;
    /** URL "embed" de Google Maps (pour la carte affichee dans la page). */
    googleMapsEmbed: string;
  };
  openingHours: OpeningDay[];
  services: Service[];
  gallery: GalleryImage[];
  testimonials: Testimonial[];
  about: {
    title: string;
    text: string;
    teamName: string;
    image: GalleryImage;
  };
  social: {
    instagram: string;
    facebook: string;
    tiktok: string;
  };
  hero: {
    /** Grande image d'arriere-plan du haut de page. */
    image: GalleryImage;
  };
  /** Note Google affichee dans la section Avis (placeholder). */
  googleRating: {
    score: string;
    reviewsCount: string;
  };
  /**
   * URL du widget de reservation en ligne (Salonkee / Planity / Booksy /
   * Treatwell / Calendly...). Laisser vide ("") pour afficher un placeholder.
   */
  bookingEmbedUrl: string;
  /** Nom du createur du site, affiche dans le footer. */
  madeBy: string;
}

/* -----------------------------------------------------------------------------
 * 2) CONTENU DU SITE  <-- C'EST ICI QU'ON MODIFIE TOUT
 * --------------------------------------------------------------------------- */
export const siteConfig: SiteConfig = {
  // --- Identite du salon ---
  identity: {
    name: "Maison Lumière",
    slogan: "L'art de la beauté, sublimé à Genève.",
    shortDescription:
      "Salon de coiffure et institut de beauté haut de gamme au cœur de Genève. Une expérience sur-mesure dans un cadre élégant et apaisant.",
  },

  // --- Couleurs de marque ---
  // Pour rebrander : change simplement ces valeurs (format hexadecimal #RRGGBB).
  colors: {
    primary: "#1f2a2e", // vert profond / encre, elegant
    secondary: "#c9a66b", // or doux / champagne
    accent: "#b08968", // terracotta clair
    ink: "#222222", // texte principal
    cream: "#f7f3ee", // fond creme
  },

  // --- Coordonnees ---
  contact: {
    address: "Rue du Rhône 42",
    city: "Genève",
    phone: "+41 22 123 45 67",
    email: "contact@maison-lumiere.ch",
    googleMapsLink: "https://maps.google.com/?q=Rue+du+Rhône+42+Genève",
    // Carte affichee dans la page : ceci est un embed Google Maps generique de Geneve.
    // Pour la vraie adresse : Google Maps > Partager > Integrer une carte > copier le lien "src".
    googleMapsEmbed:
      "https://www.google.com/maps?q=Gen%C3%A8ve%20Suisse&output=embed",
  },

  // --- Horaires d'ouverture (par jour) ---
  openingHours: [
    { jour: "Lundi", heures: "Fermé" },
    { jour: "Mardi", heures: "09:00 - 19:00" },
    { jour: "Mercredi", heures: "09:00 - 19:00" },
    { jour: "Jeudi", heures: "09:00 - 20:00" },
    { jour: "Vendredi", heures: "09:00 - 20:00" },
    { jour: "Samedi", heures: "09:00 - 17:00" },
    { jour: "Dimanche", heures: "Fermé" },
  ],

  // --- Prestations (groupees par "categorie") ---
  services: [
    {
      categorie: "Coiffure",
      nom: "Coupe & Brushing Femme",
      description: "Diagnostic personnalisé, coupe sur-mesure et coiffage.",
      duree: "1h",
      prix: "85 CHF",
    },
    {
      categorie: "Coiffure",
      nom: "Coupe Homme",
      description: "Coupe précise, contours et coiffage soigné.",
      duree: "45 min",
      prix: "55 CHF",
    },
    {
      categorie: "Coiffure",
      nom: "Coloration & Soin",
      description: "Couleur sur-mesure, soin réparateur et brushing.",
      duree: "2h",
      prix: "dès 120 CHF",
    },
    {
      categorie: "Coiffure",
      nom: "Balayage Lumière",
      description: "Éclaircissement naturel et fondu pour un effet soleil.",
      duree: "2h30",
      prix: "dès 160 CHF",
    },
    {
      categorie: "Soins du visage",
      nom: "Soin Éclat Signature",
      description: "Nettoyage profond, gommage et masque hydratant.",
      duree: "1h",
      prix: "110 CHF",
    },
    {
      categorie: "Soins du visage",
      nom: "Soin Anti-Âge Premium",
      description: "Protocole liftant et raffermissant haute performance.",
      duree: "1h15",
      prix: "145 CHF",
    },
    {
      categorie: "Onglerie",
      nom: "Manucure & Vernis Semi-Permanent",
      description: "Mise en beauté des mains et pose longue tenue.",
      duree: "1h",
      prix: "65 CHF",
    },
    {
      categorie: "Onglerie",
      nom: "Beauté des Pieds",
      description: "Soin complet, gommage et vernis.",
      duree: "50 min",
      prix: "70 CHF",
    },
  ],

  // --- Galerie ---
  // PHOTOS : ce sont des images de demonstration (Unsplash).
  // Pour mettre les vraies photos du client : depose-les dans le dossier /public/gallery
  // puis remplace "src" par un chemin local, ex: "/gallery/ma-photo.jpg".
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=800&q=80",
      alt: "Intérieur moderne et lumineux du salon",
    },
    {
      src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
      alt: "Coiffeuse réalisant un brushing sur une cliente",
    },
    {
      src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80",
      alt: "Espace coiffure lumineux avec fauteuils et grand miroir",
    },
    {
      src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
      alt: "Soin du visage avec masque dans l'institut de beauté",
    },
    {
      src: "https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=800&q=80",
      alt: "L'équipe de coiffeurs du salon, ciseaux et brosses en main",
    },
    {
      src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80",
      alt: "Détail d'une manucure soignée",
    },
  ],

  // --- Temoignages clients ---
  testimonials: [
    {
      nom: "Sophie M.",
      texte:
        "Un accueil chaleureux et un résultat parfait. Je ne confie mes cheveux qu'à eux désormais !",
      note: 5,
    },
    {
      nom: "Laura D.",
      texte:
        "Le soin du visage signature est un vrai moment de détente. Ma peau n'a jamais été aussi belle.",
      note: 5,
    },
    {
      nom: "Camille R.",
      texte:
        "Équipe à l'écoute, ambiance raffinée et conseils experts. Je recommande les yeux fermés.",
      note: 5,
    },
  ],

  // --- A propos ---
  about: {
    title: "Une maison dédiée à votre beauté",
    text:
      "Depuis plus de dix ans, Maison Lumière réunit des artisans passionnés de la coiffure et de l'esthétique. Notre philosophie : prendre le temps de vous écouter pour révéler votre beauté naturelle, dans un écrin chaleureux au cœur de Genève. Nous sélectionnons des produits d'exception et formons continuellement notre équipe aux dernières techniques.",
    teamName: "L'équipe Maison Lumière",
    image: {
      src: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=900&q=80",
      alt: "L'équipe du salon dans un intérieur chaleureux",
    },
  },

  // --- Reseaux sociaux ---
  // Laisser "" (vide) pour masquer un reseau.
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    tiktok: "https://tiktok.com/",
  },

  // --- Image du Hero (grand bandeau du haut) ---
  hero: {
    image: {
      src: "https://images.unsplash.com/photo-1633681926035-ec1ac984418a?auto=format&fit=crop&w=1920&q=80",
      alt: "Intérieur lumineux et élégant du salon Maison Lumière",
    },
  },

  // --- Note Google (placeholder a remplacer par la vraie note) ---
  googleRating: {
    score: "4,9",
    reviewsCount: "127",
  },

  // --- Module de reservation en ligne ---
  // Laisser "" pour afficher un placeholder elegant.
  // Pour activer la reservation : colle ici l'URL d'embed du widget du client
  // (Salonkee / Planity / Booksy / Treatwell / Calendly).
  bookingEmbedUrl: "",

  // --- Signature du createur du site (footer) ---
  madeBy: "VW Tim",
};
