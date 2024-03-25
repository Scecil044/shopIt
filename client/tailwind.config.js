/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        pampas: "#e9e5df",
        linen: "#fdfaf5",
        appBlue: "#2a1b52",
        appRed: "#79031D",
        appBlack: "#000407",
        appYellow: "#EDB518",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
