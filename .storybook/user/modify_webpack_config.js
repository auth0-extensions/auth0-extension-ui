const path = require('path');
module.exports = function (config) {
  // This is the default webpack config defined in the `../webpack.config.js`
  // modify as you need.

  config.module.loaders.push({
    test: /\.styl$/,
    loader: 'style-loader!css-loader!stylus-loader'
  });
  config.module.loaders.push({
    test: /\.(png|ttf|svg|jpg|gif)/,
    loader: 'url?limit=8192'
  });
  config.module.loaders.push({
    test: /\.(woff|woff2|eot)/,
    loader: 'url?limit=100000'
  });
  return config;
};
