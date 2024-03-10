import { BREAKPOINTS } from './lib/constants';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: `${BREAKPOINTS.SM}px`,
      md: `${BREAKPOINTS.MD}px`,
      lg: `${BREAKPOINTS.LG}px`,
      xl: `${BREAKPOINTS.XL}px`,
    },
    extend: {
      fontSize: {
        xxs: '10px',
      },
      colors: {
        background: '#ffffff',
        lightgrey: '#f9f9f9',
        lightgreydark: '#f5f5f5',
        muted: '#666666',
        dark: '#1e1e1e',
      },
      fontFamily: {
        meche: ['var(--font-mechepro)'],
        mackinac: ['var(--font-mackinac)'],
        fingerpaint: ['var(--font-fingerpaint)'],
      },
      height: {
        screen: ['100vh /* fallback for Opera, IE and etc. */', '100dvh'],
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};
