/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.vue"],
  theme: {
    spacing: {
      0: "0px",
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      12: "3rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      40: "10rem",
      48: "12rem",
      56: "14rem",
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1.125rem",
      md: "1.4375rem",
      lg: "1.75rem",
      xl: "2.1875rem",
      "2xl": "2.75rem",
      "3xl": "3.4375rem",
      "4xl": "4.3125rem",
      display: "5.375rem",
    },
    borderRadius: {
      md: "0.75rem",
      lg: "0.5625rem",
      full: "9999px",
    },
    colors: {
      "secondary-500": "#1F1926",
      "secondary-400": "#4C4751",
      "primary-400": "#FDF7FF",
      "primary-700": "#B4AFB5",
      transparent: "rgba(0,0,0,0)",
      accent: "#4816D9",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "input-autofill": "0 0 0 70px #FDF7FF inset",
      },
    },
  },
  plugins: [],
};
