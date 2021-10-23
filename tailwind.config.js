module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
       },
      typography:{
        DEFAULT: {
          css: {
            'line-height': '1.25rem',
            'font-size': '0.75rem',
            'color': '#666',
            'max-width': '100%',
            a: {
              'text-decoration': 'none',
            }
          }
        }
      },
      fontFamily:{
        rob: "'Roboto', sans-serif",
        pre: "'Encode Sans Condensed', sans-serif",
      },
      textColor: theme => theme('colors'),
      textColor: {
        'primary': '#222',
        'secondary': '#444',
        'third': '#666',
        'signUp': '#272727',
        'footer': '#e6e6e6',
        'danger': '#e3342f',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1080px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
}