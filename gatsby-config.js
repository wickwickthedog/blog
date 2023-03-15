/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `WickWickTheDog`,
    siteUrl: `https://wickwickthedog.gatsbyjs.io/`,
    githubUsername: `wickwickthedog`
  },
  plugins: [
    "gatsby-plugin-sass",
//    "gatsby-plugin-image",
//    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      }
    },
    "gatsby-plugin-mdx",
  ],
};