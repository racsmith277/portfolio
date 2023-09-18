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
      body:['var(--font-basiersquaremono)', 'mono']
    },
    extend: {
    },
  },
  plugins: [],
}
export default config
