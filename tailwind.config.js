/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1280px',
      xl: '2000px',
    },
    extend: {
      fontSize: {
        xxs: '10px',
      },
      colors: {
        lightgrey: '#f9f9f9',
        lightgreydark: '#f5f5f5',
        muted: '#666666',
        dark: '#1e1e1e',
      },
      fontFamily: {
        meche: ['var(--font-mechepro)'],
        fingerpaint: ['var(--font-fingerpaint)'],
      },
      height: {
        screen: ['100vh /* fallback for Opera, IE and etc. */', '100dvh'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
