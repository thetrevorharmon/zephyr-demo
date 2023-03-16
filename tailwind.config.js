const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/extensions/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // sans: ["Work Sans", ...defaultTheme.fontFamily.sans],
        display: ["Shrikhand", ...defaultTheme.fontFamily.sans],
        mono: ["Source Code Pro", ...defaultTheme.fontFamily.mono],
        serif: ["Source Serif Pro", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
