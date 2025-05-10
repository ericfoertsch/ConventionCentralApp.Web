// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Ensure this matches your file extensions
  ],
  theme: {
    extend: {
      colors: {
        navbarLight: '#f1f5f9',
        navbarDark: '#0f172a',
        accentLight: '#4f46e5',
        accentDark: '#818cf8',
        layoutBackgroundLight: '#ffffff',
        layoutBackgroundDark: '#0f172a',
        layoutSidebarLight: '#e5e7eb',
        layoutSidebarDark: '#1f2937',
        layoutBorderLight: '#d1d5db',
        layoutBorderDark: '#374151',
      },
    },
  },
  plugins: [],
};

export default config;
