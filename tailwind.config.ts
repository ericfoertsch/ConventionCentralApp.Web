import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0D1B2A',
        'darker-grey': '#121821',  // darker grey-black
        'teal': '#00B4D8',
      }
    },
  },
  plugins: [],
}

export default config
