import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        customize: '0 0 50px 0 rgb(0 0 0 /0.15)',
        hover: '0 0 30px 0 rgb(0 0 0 /0.25)',
      },
    },
  },
  plugins: [],
} satisfies Config;
