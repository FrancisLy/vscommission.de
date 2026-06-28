/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "2rem",
        xl: "4rem",
        "2xl": "6rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0A2540",
          50: "#E6EDF5",
          100: "#C9D8EB",
          200: "#93B0D6",
          300: "#5E88C2",
          400: "#3A6BAE",
          500: "#1B4D7E",
          600: "#143D66",
          700: "#0E2D4E",
          800: "#0A2540",
          900: "#061A2E",
          950: "#03101F",
        },
        accent: {
          DEFAULT: "#00C896",
          50: "#E6FBF4",
          100: "#C7F5E4",
          200: "#90EBC9",
          300: "#52E0AE",
          400: "#1FD69A",
          500: "#00C896",
          600: "#00A87D",
          700: "#008564",
          800: "#00624A",
          900: "#004030",
        },
        gold: {
          DEFAULT: "#FFB800",
          light: "#FFD466",
          dark: "#CC9300",
        },
      },
      fontFamily: {
        heading: ["Sora", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["3.5rem", { lineHeight: "1.1", fontWeight: "700" }],
        "display-xl": ["3rem", { lineHeight: "1.15", fontWeight: "700" }],
        "display-lg": ["2.5rem", { lineHeight: "1.2", fontWeight: "700" }],
        "display-md": ["2rem", { lineHeight: "1.25", fontWeight: "600" }],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.7s ease-out forwards",
        "slide-in-right": "slideInRight 0.7s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        marquee: "marquee 30s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "gradient-mesh":
          "radial-gradient(at 0% 0%, rgba(0, 200, 150, 0.15) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(27, 77, 126, 0.2) 0px, transparent 50%), radial-gradient(at 50% 100%, rgba(255, 184, 0, 0.08) 0px, transparent 50%)",
        "noise":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
