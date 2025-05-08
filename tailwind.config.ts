// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#17E344FF',
        'darker-grey': '#121821',
        tealz: '#19928EFF',
      },
    },
  },
  plugins: [],
};

export default config;
