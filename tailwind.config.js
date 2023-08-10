/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        lightgrey: "#f9f9f9",
        lightgreydark: "#f3f3f3",
        muted: "#666666",
        dark: "#1e1e1e",
      },
      fontFamily: {
        meche: ["var(--font-mechepro)"],
        fingerpaint: ["var(--font-fingerpaint)"],
      },
      height: {
        screen: ["100vh /* fallback for Opera, IE and etc. */", "100dvh"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
