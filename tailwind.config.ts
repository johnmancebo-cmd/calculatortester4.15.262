import type { Config } from "tailwindcss";

/**
 * Design-token layer for The Water Street Club.
 * Colors/type-scale/spacing live here so the client can re-skin quickly.
 * Proposed tokens — see README "Design Proposal" (pending client approval).
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#071A2F",
        deepBlue: "#0B2341",
        gold: "#C9A227",
        // Accessible gold for TEXT on light backgrounds (gold #C9A227 fails AA on
        // white/offWhite). Use text-goldText on light; keep gold/softGold on dark.
        goldText: "#7A5E0C",
        softGold: "#E6D28A",
        offWhite: "#F8F6F0",
        charcoal: "#1F2933",
        lightGray: "#E5E7EB",
      },
      fontFamily: {
        // Wired to next/font CSS variables (see app/layout.tsx)
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 6vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
        "display-lg": ["clamp(2.25rem, 4.5vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.15" }],
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(7,26,47,0.08), 0 8px 24px rgba(7,26,47,0.06)",
        "card-hover": "0 4px 12px rgba(7,26,47,0.12), 0 16px 40px rgba(7,26,47,0.10)",
      },
      container: {
        center: true,
        padding: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
