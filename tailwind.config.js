/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,jsx,vue,ts,tsx}",
    "./components/**/**/*.{js,jsx,vue,ts,tsx}",
    // "./layouts/**/*.vue",
    "./pages/**/*.{js,jsx,vue,ts,tsx}",
    // "./plugins/**/*.{js,ts}",
  ],
  mode: 'jit',
  theme: {
    extend: {},
  },
  plugins: [],
  important: true
}
