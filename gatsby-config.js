require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE
const googleAnalyticsTrackingId = process.env.GOOGLE_ANALYTICS_ID

module.exports = {
  // siteMetadata: {
  //   siteTitleAlt: `Patrycja Rucińska - Game Designer`,
  // },
  siteMetadata: {
    siteTitle: "Pata",
    // siteTitleAlt: "My Blog",
    author: "Amberley Romo",
    description: "A collection of my thoughts and writings.",
    siteUrl: "https://amberley.blog/",
    social: [
      {
        name: "twitter",
        url: "https://twitter.com/amber1ey",
      },
      {
        name: "github",
        url: "https://github.com/amberleyromo",
      },
    ],
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emma`,
      // See the theme's README for all available options
      options: {

      },
    },
    googleAnalyticsTrackingId && {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pata - @lekoarts/gatsby-theme-emma`,
        short_name: `Pata`,
        description: `Portfolio Game Designer`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#b83280`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
