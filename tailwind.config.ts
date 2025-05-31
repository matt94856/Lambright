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
        'grainger-blue': '#005EB8',
        'grainger-light-blue': '#0078D4',
        'grainger-dark-blue': '#004B8D',
        'grainger-gray': '#F5F5F5',
        'grainger-dark-gray': '#333333',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}

export default config 