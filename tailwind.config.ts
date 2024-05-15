import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          50: '#f9f7f8',
          100: '#f3f0f2',
        },
        secondary: {
          50: '#f7f9f9',
          100: '#eff3f4',
          200: '#dfe0e3',
          300: '#cfcdd1',
          400: '#b1b3b9',
          500: '#94999f',
          600: '#858b91',
          700: '#6f727c',
          800: '#585c65',
          900: '#474b51',
        },
        tertiary: {
          50: '#f8f9f7',
          100: '#f1f3f0',
          200: '#e3e6e0',
          300: '#d5d9d0',
          400: '#b9bfb1',
          500: '#9da697',
          600: '#8e9682',
          700: '#757d6b',
          800: '#5d6454',
          900: '#4b4f42',
        },
        'side-black': '#0A150F',
        'background-white': '#f9f9f9',
        'action-green': '#97F675',
        'gen-white': '#ffffff',
        'landing-bg':'#131313'
      },
    },
  },
  plugins: [],
}
export default config
