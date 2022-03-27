/* eslint-disable  @typescript-eslint/no-var-requires */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "960px",
        xl: "1140px",
        xxl: "1440px",
      },
    },
    extend: {
      colors: {
        dark: {
          100: "#D2D0D4",
          200: "#A4A1A9",
          300: "#77717E",
          400: "#4A4253",
          500: "#1D1328",
        },
        brown: {
          100: "#DFD2D6",
          200: "#C0A5AD",
          300: "#A07884",
          400: "#804B5B",
          500: "#601E32",
        },
        lightBrown: {
          100: "#F5EAEB",
          200: "#EBD4D7",
          300: "#E1BFC4",
          400: "#D7A9B0",
          500: "#CD949C",
        },
        pink: {
          100: "#FDE7EB",
          200: "#FACED7",
          300: "#F8B6C3",
          400: "#F59DAF",
          500: "#F3859B",
        },
        lightPink: {
          100: "#FEF3F4",
          200: "#FDE6E9",
          300: "#FBD9DD",
          400: "#FACDD2",
          500: "#F9C0C7",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
