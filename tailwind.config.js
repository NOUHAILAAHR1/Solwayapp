/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {screens: {
      "ipad-pro": { raw: "(min-width: 1024px) and (min-height: 1366px)" }, 
    },},
  },
  plugins: [],
}


