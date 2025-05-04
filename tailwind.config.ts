import { Config } from 'tailwindcss';

// interface CustomTailwindConfig extends Config {
//   safelist?: string[];  // Extend Config with safelist
// }

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
    // './src/pages/**/*.{ts,tsx,js,jsx}',  // Include pages in content path
  ],
  // safelist: [
  //   'bg-teal-500', // Add the classes you want to safelist
  // ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#114276',
        'darker-grey': '#121821',
        'tealz': '#19928EFF',  // Custom teal color
      },
    },
  },
  plugins: [],
};

export default config;
