module.exports = {
  pathPrefix: "/ronny-minda.github.io",

  siteMetadata: {
    title: `Ronny Minda V.`,
    description: `Soy desarrollador de Software Web, react, node`,
    author: `ronny-minda`,
    siteUrl: `https://ronny-minda.github.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/img.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `51b6e6dbbbc89d4ca56c63c5a26c7a`,
      },
    },
  ],
}
