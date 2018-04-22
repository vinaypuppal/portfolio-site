const path = require('path');

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

    return null;
  });
