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

	if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'development') {

    config.module.loaders.push({
      test: /\.jsx?$/,
      loader: 'babel',
      exclude: path.join(__dirname, '../../node_modules/')
    });

    config.entry = path.join(__dirname, '../../src/components/index.js');
    config.output = {
      path: './dist',
      filename: 'index.js',
      library: true,
      libraryTarget: 'commonjs2'
    };

    if (process.env.NODE_ENV === 'development') config.debug = true;

    if (process.env.NODE_ENV === 'production') {
        config.externals = {
            'redux': 'commonjs redux',
            'react': 'commonjs react',
            'react-dom': 'commonjs react-dom',
            'react-router': 'commonjs react-router'
        };
    }
  }

  return config;
};
