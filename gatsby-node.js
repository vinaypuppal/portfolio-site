const path = require('path');

exports.modifyWebpackConfig = ({ config, stage }) => {
  switch (stage) {
    case 'develop':
      config.preLoader('eslint-loader', {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
      });
      break;
    default:
      break;
  }
  if (stage === 'build-javascript') {
    // turn off source-maps
    config.merge({ devtool: false });
  }
  return config;
};

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage, createRedirect } = boundActionCreators;
  createRedirect({ fromPath: '/works', toPath: '/works/vanilla', isPermanent: true });
  const worksTemplate = path.resolve('src/templates/works.js');
  return graphql(`
    {
      allWorksJson {
        edges {
          node {
            allWorks {
              title
              description
              demoUrl
              previewUrl
              category
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    const works = result.data.allWorksJson.edges[0].node.allWorks;
    /**
     * Get all categories
     * Get only unique categories using Set (https://mdn.io/set)
     * Finally convert Set into Array
     */
    const categories = Array.from(new Set(works.map(work => work.category)));
    console.log(categories);
    categories.forEach(category => {
      createPage({
        path: `/works/${category}`,
        component: worksTemplate,
        context: {
          category,
          categories,
        },
      });
    });
    return null;
  });
};
