import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lina: {
          50:  '#F0F7F8',
          100: '#D6EAED',
          200: '#A8D1D7',
          300: '#6BAAB5',
          400: '#3A8090',
          500: '#2E6874',
          600: '#245760',
          700: '#1A404A',
          800: '#112B33',
          900: '#08161B',
        },
        warm: {
          300: '#E8B48A',
          400: '#DC9F6A',
          500: '#D4905A',
          600: '#B87848',
        },
        dark: {
          50:  '#F5F5F5',
          100: '#E0E0E0',
          200: '#BDBDBD',
          300: '#9E9E9E',
          400: '#757575',
          500: '#616161',
          600: '#424242',
          700: '#2A2A2A',
          800: '#1A1A1A',
          900: '#111111',
        },
      },
      fontFamily: {
        sans:    ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        display: ['var(--font-barlow)', 'system-ui', 'sans-serif'],
        serif:   ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
