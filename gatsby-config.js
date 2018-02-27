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
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    'gatsby-plugin-emotion',
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
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Vinay Puppal - Front End Developer',
        short_name: 'Vinay Puppal',
        start_url: '/',
        background_color: '#65c9ff',
        theme_color: '#65c9ff',
        display: 'standalone',
        orientation: 'portrait-primary',
        icons: [
          {
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: '/favicons/android-chrome-256x256.png',
            sizes: '256x256',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-78963903-1',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-json',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/*': ['Cache-Control: public, max-age=3600, no-cache', 'Access-Control-Max-Age: 600'],
          '/sw.js': ['Cache-Control: private, no-cache'],
        }, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: headers => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
  ],
};
