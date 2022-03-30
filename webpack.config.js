const path = require('path');

const commonEntries = {
  'cookie': [
    path.resolve(__dirname, 'assets/scripts/cookie-preferences.js')
  ],
  'gtm': [
    path.resolve(__dirname, 'assets/scripts/gtm.js')
  ],
  'pattern-library': [
    path.resolve(__dirname, 'assets/scripts/all.js'),
    path.resolve(__dirname, 'assets/scripts/ds-site.js')
  ],
  'autocomplete': [
    path.resolve(__dirname, 'assets/scripts/autocomplete-only.js'),
  ]
};

module.exports = [{
  mode: 'production',

  entry: commonEntries,

  output: {
    path: path.resolve(__dirname, 'assets/scripts/dist'),
    filename: '[name].js'
  }
}, {
  mode: 'production',

  entry: commonEntries,

  output: {
    path: path.resolve(__dirname, 'assets/scripts/dist'),
    filename: '[name].es5.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}];
