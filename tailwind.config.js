/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        ivory: "#F6F4E5",
        "ivory-dark": "#929081",
        "dark-amethyst": "#2B135A",
        mauve: "#CBAAF6",
        "mauve-light": "#F3EAFE",
        "mauve-dark": "#7F59B1",
        "golden-bronze": "#B19A35",
        "golden-bronze-dark": "#766311",
        "banana-cream": "#FCF27B",
        "bubblegum-tint": "#FF8CBD",
        "bubblegum-tint-light": "#F8F4F6",
        "sky-blue": "#9ECAF2",
        "cherry-rose": "#A71F5F",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        heading: ["Poppins", "sans-serif"],
        body: ["Manrope", "sans-serif"],
      },
      boxShadow: {
        shell: "0 18px 80px rgba(43, 19, 90, 0.12)",
        card: "0 20px 70px rgba(43, 19, 90, 0.1)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
        "6xl": "3.5rem",
      },
      maxWidth: {
        shell: "1280px",
      },
      backgroundImage: {
        "woven-grid":
          "linear-gradient(rgba(43, 19, 90, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(43, 19, 90, 0.07) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
