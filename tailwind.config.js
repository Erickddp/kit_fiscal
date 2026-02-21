/**
 * Tailwind CSS configuration for the KIT Fiscal Contable site.
 *
 * The content paths include all files inside the `app`, `pages`, and `components`
 * directories so that unused styles can be purged in production. A custom
 * primary colour palette is defined to give the site a sober, premium look.
 */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Inter', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      colors: {
        background: '#030303',
        surface: '#0A0A0A',
        primary: {
          DEFAULT: '#FFFFFF',
          muted: '#A1A1AA',
          dark: '#09090B'
        },
        accent: {
          DEFAULT: '#3B82F6',
          hover: '#60A5FA',
          glow: 'rgba(59, 130, 246, 0.5)',
        },
        border: '#1F1F23',
        input: '#121214',
      },
      boxShadow: {
        'premium': '0 0 0 1px rgba(255, 255, 255, 0.05), 0 10px 30px -10px rgba(0, 0, 0, 0.5)',
        'glow': '0 0 20px rgba(59, 130, 246, 0.15)',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0) 100%)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};