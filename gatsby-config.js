module.exports = {
  siteMetadata: {
    title: 'Igedla',
    siteUrl: 'https://www.gatsbyjs.com',
    description: 'Check symptoms, get results fast'
  },
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    }
  ]
};
