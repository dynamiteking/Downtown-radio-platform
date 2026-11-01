/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0D0F12",
        foreground: "#F8FAFC",
        charcoal: {
          950: "#080A0D",
          900: "#0D0F12",
          850: "#12161B",
          800: "#171C23",
          700: "#222A35",
          600: "#313C4D",
        },
        gold: {
          50: "#FFF9EB",
          100: "#FEF2C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FFB834",
          500: "#FF9F1C",
          600: "#EA7E07",
          700: "#B85802",
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FFB834 0%, #FF9F1C 50%, #D97706 100%)',
        'gold-gradient-glow': 'linear-gradient(135deg, rgba(255, 184, 52, 0.15) 0%, rgba(255, 159, 28, 0.25) 100%)',
        'glass-card': 'linear-gradient(180deg, rgba(23, 28, 35, 0.8) 0%, rgba(13, 15, 18, 0.9) 100%)',
        'glass-highlight': 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(255, 159, 28, 0.4)',
        'gold-glow-lg': '0 0 45px -5px rgba(255, 159, 28, 0.5)',
        'glass-edge': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spectrum': 'spectrum 1.2s ease-in-out infinite alternate',
      },
      keyframes: {
        spectrum: {
          '0%': { height: '20%' },
          '100%': { height: '100%' },
        }
      }
    },
  },
  plugins: [],
};
