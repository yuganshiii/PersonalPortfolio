/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#faf9f7',
          secondary: '#f5f3f0',
          card: '#ffffff',
        },
        text: {
          primary: '#2d2d2d',
          secondary: '#6b6b6b',
          tertiary: '#9a9a9a',
        },
        accent: {
          primary: '#7c9885',
          hover: '#6b8574',
          subtle: '#e8eeea',
        },
        border: {
          light: '#e8e6e3',
        },
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        body: ['DM Sans', 'Outfit', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        xs: '0.75rem',     // 12px
        sm: '0.875rem',    // 14px
        base: '1rem',      // 16px
        lg: '1.125rem',    // 18px
        xl: '1.25rem',     // 20px
        '2xl': '1.5rem',   // 24px
        '3xl': '2rem',     // 32px
        '4xl': '2.5rem',   // 40px
        '5xl': '3.5rem',   // 56px
      },
      spacing: {
        '128': '32rem',
      },
      boxShadow: {
        soft: '0 2px 8px rgba(0, 0, 0, 0.04)',
        hover: '0 8px 24px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
