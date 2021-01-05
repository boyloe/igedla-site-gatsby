module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: 'hsl(207, 73%, 52%)',
          default: 'hsl(207, 73%, 57%)',
          darker: 'hsl(207, 73%, 44%)'
        }
      },
      fontFamily: {
        // eslint-disable-next-line prettier/prettier
        'roboto': ["'Roboto:wght@500', sans-serif"]
      },
      boxShadow: {
        'sm-blue': '0 1px 2px 0 rgba(9, 151, 230, 0.9)',
        'DEFAULT-blue': '0 1px 3px 0 rgba(9, 151, 230, 0.9), 0 1px 2px 0 rgba(9, 151, 230, 0.9)',
        'md-blue': '0 4px 6px -1px rgba(9, 151, 230, 0.9), 0 2px 4px -1px rgba(9, 151, 230, 0.9)',
        'lg-blue': '0 10px 15px -3px rgba(9, 151, 230, 0.9), 0 4px 6px -2px rgba(9, 151, 230, 0.9)',
        'xl-blue': '0 20px 25px -5px rgba(9, 151, 230, 0.9), 0 10px 10px -5px rgba(9, 151, 230, 0.9)',
        '2xl-blue': '0 25px 50px -12px rgba(9, 151, 230, 0.25)',
        '3xl-blue': '0 35px 60px -15px rgba(9, 151, 230, 0.3)',
        'inner-blue': 'inset 0 2px 4px 0 rgbargba(9, 151, 230, 0.9)',
        none: 'none',
        '3xl-blue-wide': '10px 15px 35px 5px rgba(9, 151, 230, 0.9)'
      }
    }
  },
  variants: {},
  plugins: []
};
