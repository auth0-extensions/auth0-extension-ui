const path = require('path');
module.exports = function (config) {
  // This is the default webpack config defined in the `../webpack.config.js`
  // modify as you need.

  config.module.loaders.push({
    test: /\.styl$/,
    loader: 'style-loader!css-loader!stylus-loader'
  });

  return config;
};
