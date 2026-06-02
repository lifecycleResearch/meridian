/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ['"Playfair Display"', "Georgia", "serif"],
      },
      colors: {
        // Matched from clientretentionservice.com CSS
        // --background: 30 12% 82% → #d7d1cc
        // --foreground: 220 25% 15% → #1d2128
        // --primary: 43 65% 54%    → #c9a84c
        // --card: 30 12% 88%       → #e3ddd8
        // --border: 30 10% 72%     → #c4bbb4
        // --muted: 30 10% 76%      → #cdc5be
        brand: {
          bg: "#d7d1cc",       // warm beige-greige
          card: "#e3ddd8",      // lighter card surface
          border: "#c4bbb4",    // warm border
          muted: "#cdc5be",     // muted surface
        },
        gold: {
          DEFAULT: "#c9a84c",
          light: "#e8c87a",
          dark: "#a88b35",
        },
        ink: {
          DEFAULT: "#1d2128",
          muted: "#5c6370",
          light: "#8a9099",
        },
      },
      borderRadius: { card: "0.5rem", pill: "999px" },
      boxShadow: {
        "card": "0 0 0 1px rgba(201,168,76,0.15), 0 8px 32px rgba(0,0,0,0.4)",
        "card-active": "0 0 0 2px rgba(201,168,76,0.7), 0 8px 32px rgba(201,168,76,0.15)",
        "soft": "0 1px 2px rgba(0,0,0,0.06)",
      },
      letterSpacing: {
        wider: "0.1em",
        widest: "0.2em",
      },
    },
  },
  plugins: [],
};
