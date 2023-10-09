/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
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
  plugins: [
    require('flowbite/plugin')
],
})

