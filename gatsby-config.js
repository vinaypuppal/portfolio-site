module.exports = {
  siteMetadata: {
    title: 'Vinay Puppal',
    subtitle: `Front End Developer`,
    socialLinks: {
      facebook: 'https://www.facebook.com/puppalvinay',
      twitter: 'https://twitter.com/vinaypuppal',
      linkedin: 'https://www.linkedin.com/in/vinay-puppal-4514b7104',
      codepen: 'http://codepen.io/vinaypuppal',
      fcc: 'https://www.freecodecamp.org/vinaypuppal',
      github: 'https://github.com/vinaypuppal',
      medium: 'https://medium.com/@vinaypuppal',
    },
    navigationLinks: {
      aboutMe: '/about',
      myWorks: '/works',
      myBlog: '/blog',
    },
  },
  plugins: [
    // Adding various source folders to the GraphQL layer.
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Vinay Puppal - Front End Developer',
        short_name: 'Vinay Puppal',
        start_url: '/',
        background_color: '#65c9ff',
        theme_color: '#65c9ff',
        display: 'minimal-ui',
        icons: [
          {
            src: `/favicons/android-icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography.js`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-78963903-1',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-json',
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-next',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
  ],
};
