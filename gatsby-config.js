module.exports = {
  siteMetadata: {
    title: `VinayPuppal.com`,
    description: `Hi, I'm VinayPuppal. I focus on creating interactive websites that empower real people and simplifies their lives. Check out some of my recent projects or learn more about me.`,
    siteUrl: `https://www.vinaypuppal.com`,
  },
  plugins: [
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-react-next`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-transformer-yaml`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 786,
              backgroundColor: `#ffffff`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noopener noreferrer',
            },
          },
          `gatsby-remark-autolink-headers`,
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-78963903-2',
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#fff`,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Vinay Puppal - Web Developer',
        short_name: 'Vinay Puppal',
        start_url: '/?utm_source=homescreen',
        background_color: '#000000',
        theme_color: '#000000',
        display: 'standalone',
        orientation: 'portrait-primary',
        icons: [
          {
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: '/favicons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            query: `
            {
              allMarkdownRemark(
                sort: { fields: [frontmatter___date], order: DESC }
                filter: { frontmatter: { publish: { eq: true } } }
                limit: 1000
              ) {
                edges {
                  node {
                    excerpt
                    html
                    fields { slug }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            }
          `,
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark
                ? allMarkdownRemark.edges.map(edge =>
                    Object.assign({}, edge.node.frontmatter, {
                      description: edge.node.excerpt,
                      url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                      guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                      custom_elements: [{ 'content:encoded': edge.node.html }],
                    })
                  )
                : [],
            output: '/rss.xml',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        mergeLinkHeaders: false,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.vinaypuppal.com`,
      },
    },
  ],
};
