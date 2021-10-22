const tailwindColors = require("tailwindcss/colors");
delete tailwindColors.lightBlue;
const defaultColors = {
  ...tailwindColors,
  brand: {
    primary: "#1226AA",
    secondary: "#0082CB",
  },
};

module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: defaultColors,
    backgroundColor: defaultColors,
    borderColor: defaultColors,
    caretColor: defaultColors,
    gradientColorStops: defaultColors,
    defaultColors: defaultColors,
    placeholderColor: defaultColors,
    ringColor: defaultColors,
    ringOffsetColor: defaultColors,
    textColor: defaultColors,
    extend: {
      fontFamily: {
        sans: ["Oliciy", "Roboto", "Arial"],
      },
    },
  },
};
