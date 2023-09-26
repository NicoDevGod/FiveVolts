/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        before: "-10px 10px 0 #FFF",
        before2: "-10px -10px 0 #FFF",
        after: "-10px 10px 0 #FFF",
        after2: "-10px 10px 0 #232949",
      },
      colors: {
        primary: "#232949",
      },
    },
  },
  plugins: [],
}

