/**
 * Tailwind CSS configuration for the KIT Fiscal Contable site.
 *
 * The content paths include all files inside the `app`, `pages`, and `components`
 * directories so that unused styles can be purged in production. A custom
 * primary colour palette is defined to give the site a sober, premium look.
 */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        background: '#FAFAFA',
        surface: '#FFFFFF',
        primary: {
          DEFAULT: '#111827',
          light: '#374151',
          dark: '#030712'
        },
        accent: {
          DEFAULT: '#3B82F6',
          hover: '#2563EB',
        },
        muted: '#9CA3AF'
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(0, 0, 0, 0.04)',
        'float': '0 20px 40px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
};