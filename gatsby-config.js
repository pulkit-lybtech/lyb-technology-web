module.exports = {
  siteMetadata: {
    title: `LYB Technology - Launch Your Brand`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Pulkit Singh`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `LYB Technology - Launch Your Business`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-sass`,
    // gatsby-config.js

    {
      resolve: 'gatsby-source-graphcms',
      options: {
        // endpoint: process.env.GRAPHCMS_ENDPOINT,
        endpoint: `https://api-ap-northeast-1.graphcms.com/v2/cko83vyzfkdd901z125oj7twr/master`,
        typePrefix: `graphCMS`
      },
    }
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
