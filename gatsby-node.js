const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

// add eslint loader to webpack config in develop stage
exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'develop') {
    config.preLoader('eslint-loader', {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
    });
  }
  config.merge({
    resolve: {
      alias: {
        'styled-components': 'react-emotion',
      },
    },
  });
  return config;
};

exports.createPages = ({ boundActionCreators: { createPage }, graphql }) =>
  graphql(`
    {
      allContentYaml {
        edges {
          node {
            works {
              category
            }
          }
        }
      }
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { publish: { eq: true } } }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `).then(results => {
    if (results.errors) {
      return Promise.reject(results.errors);
    }

    const { works } = results.data.allContentYaml.edges[0].node;

    /**
     * Get all categories
     * Get only unique categories using Set (https://mdn.io/set)
     * Finally convert Set into Array
     */
    const categories = Array.from(new Set(works.map(work => work.category)));

    // create works page based on categories
    categories.forEach(category => {
      createPage({
        path: `/works/${category}`,
        component: path.resolve('src/templates/works.js'),
        context: {
          category,
          categories,
        },
      });
    });

    const posts = results.data.allMarkdownRemark
      ? results.data.allMarkdownRemark.edges
      : [];

    // creat blog post pages
    posts.forEach((post, index) => {
      const previous =
        index === posts.length - 1 ? false : posts[index + 1].node;
      const next = index === 0 ? false : posts[index - 1].node;
      createPage({
        path: post.node.fields.slug,
        component: path.resolve('src/templates/post.js'),
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      });
    });

    return null;
  });

exports.onCreateNode = ({
  node,
  boundActionCreators: { createNodeField },
  getNode,
}) => {
  // add blog post path as slug to remark node
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
