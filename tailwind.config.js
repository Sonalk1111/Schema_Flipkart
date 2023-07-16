const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.html",
    "../node_modules/@deepui/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      extend: {
        colors: {
          cyan: colors.cyan,
          emerald: colors.emerald,
          amber: colors.amber
        },
        fontSize: {
          xss: ["0.6875rem", { lineHeight: "1rem" }],
          smm: ["0.8125rem", { lineHeight: "1rem" }],
        },
        borderColor: {
          inherit: "inherit",
        },
        fontFamily: {
          sans: ['Inter', ...require('tailwindcss/defaultTheme').fontFamily.sans],
          display: ['Eudoxus Sans', ...require('tailwindcss/defaultTheme').fontFamily.sans],
        }
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("tailwindcss-font-inter"),
    require("@tailwindcss/forms"),
    require("tailwindcss-animate"),
    require("@deepui/core")({
      colors: ["cyan", "emerald", "amber", "red"],
      cssBase: true,
    }),
  ],
}

