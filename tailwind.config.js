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
      }
    },
    boxShadow: {
      '3xl-blue': '10px 15px 35px 5px rgba(9, 151, 230, 0.9)'
    }
  },
  variants: {},
  plugins: []
};
