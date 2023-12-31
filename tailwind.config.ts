import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      heading: ['var(--font-krungthep)', 'serif'],
      body:['var(--font-basiersquaremono)', 'mono'],
      voicebar:['var(--font-silka)', 'sans-serif'],
      comet:['var(--font-epilogue)', 'sans-serif'],
    },
    extend: {
      dropShadow:{
        emerald: '0 2px 2px rgba(110, 231, 183, 1)]'
      }
    },
  },
  plugins: [],
}
export default config
