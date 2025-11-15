import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#22c55e',
          500: '#22c55e'
        },
        accent: {
          DEFAULT: '#60a5fa'
        }
      },
      boxShadow: {
        glow: '0 0 40px rgba(34,197,94,0.15)'
      }
    },
  },
  plugins: [],
} satisfies Config
