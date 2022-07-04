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
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': '#0C2233',
        'secondary': '#083D56',
        'tertiary': '#0E5F76',
        'quanternary': '#FCE38A',
        
      }
    },
  },
  plugins: [],
}