module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: {min: "100px", max: "400px"},
      sm: {min: "401px", max: "640px"},
      md: {min: "641px", max: "920px"},
      lg: {min: "921px", max: "1150px"},
      xl: {min: "1151px"},
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
