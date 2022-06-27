module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
}