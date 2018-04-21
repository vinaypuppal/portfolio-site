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
