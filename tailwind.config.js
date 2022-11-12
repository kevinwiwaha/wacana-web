/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
            center:true,
            padding: '2rem',
          },
    extend: {},
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
// /**
//  * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
//  */
//  const colors = require('tailwindcss/colors')
//  module.exports = {
//   content: [
//     "./node_modules/flowbite-react/**/*.js",
//     "./pages/**/*.{ts,tsx}",
//     "./public/**/*.html",
//   ],
//   plugins: [
//     require("flowbite/plugin")
//   ],
//   theme: {
//     container: {
//       center:true,
//       padding: '2rem',
//     },
//     extend: {
//       // extend base Tailwind CSS utility classes
//     }
//   },
// };