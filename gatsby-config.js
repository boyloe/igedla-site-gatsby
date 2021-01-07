module.exports = {
  siteMetadata: {
    title: 'Igedla',
    siteUrl: 'https://www.gatsbyjs.com',
    description: 'Check symptoms, get results fast'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'React go',
        short_name: 'Reactgo',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: '../assets/logo-square.png'
      }
    }
  ]
};
