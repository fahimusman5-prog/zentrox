/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        zentrox: {
          dark: "#03070f",
          navy: "#071426",
          panel: "#0b1728",
          blue: "#057cff",
          cyan: "#35d5ff",
          orange: "#ff8a00",
          muted: "#92a5bd"
        }
      },
      boxShadow: {
        glow: "0 0 44px rgba(5, 124, 255, 0.28)",
        card: "0 24px 70px rgba(0, 0, 0, 0.28)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};
