/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        header: ["Playfair Display", "sans-serif"],
        // header: ["PT Serif", "sans-serif"],
        // main: ["Roboto", "sans-serif"],
        main: ["Helvetica Neue Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
}

