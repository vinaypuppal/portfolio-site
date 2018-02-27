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
