import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}', // Add all your src files here
  ],
  theme: {
    extend: {
      // Customizations go here
    },
  },
  plugins: [],
}

export default config
