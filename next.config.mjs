/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // On autorise ici les domaines des images distantes (placeholders Unsplash).
    // Quand le client fournira ses vraies photos, place-les dans /public
    // et utilise des chemins locaux (ex: /gallery/photo-1.jpg) : aucune
    // configuration supplementaire ne sera necessaire.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
