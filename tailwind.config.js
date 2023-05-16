/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      openSans: 'Open Sans',
      montserrat: 'Montserrat',
      sans: 'sans-serif',
    },
    extend: {
      colors: {
        dark: '#35363a',
        darker: '#060606',
        black: '#000000',
        cream: '#f0ece1',
        white: '#FFFFFF',
        green: '#13aa52',
        darkish: '#2b2c2f',
        brown: '#2f2b2b',
      },
      animation: {
        cursor: 'cursor .6s linear infinite alternate',
        type: 'type 1.8s ease-out .8s 1 normal both',
        'type-reverse': 'type 1.8s ease-out 0s infinite alternate-reverse both',
        text: 'text 5s ease infinite',
      },
      keyframes: {
        type: {
          '0%': { width: '0ch' },
          '5%, 10%': { width: '1ch' },
          '15%, 20%': { width: '2ch' },
          '25%, 95%': { width: '3ch' },
          // '35%, 40%': { width: 'ch' },
          // '45%, 50%': { width: '4ch' },
          // '55%, 60%': { width: '4ch' },
          // '65%, 70%': { width: '4ch' },
          // '75%, 80%': { width: '4ch' },
          // '85%, 90%': { width: '4ch' },
          // '95%': { width: '10ch' },
        },
        text:{
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        
        
      },
    },
    variants: {
      extend: {
        cursor: ['hover', 'custom'],
      },
    },
  },
  plugins: [],
}

