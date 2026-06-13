import type { Config } from "tailwindcss";

/**
 * Configuration Tailwind.
 *
 * Les couleurs de marque (primary / secondary / accent) ne sont PAS ecrites en dur ici.
 * Elles pointent vers des variables CSS (--color-primary, etc.) qui sont definies
 * dynamiquement depuis src/config/site.config.ts (voir src/app/layout.tsx).
 * => Pour rebrander le site, il suffit de changer les couleurs dans la config.
 */
const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/config/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        ink: "var(--color-ink)",
        cream: "var(--color-cream)",
      },
      fontFamily: {
        // Variables fournies par next/font (voir layout.tsx)
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
