const path = require('path');

module.exports = [{
  mode: 'development',

  entry: {
    'cookie': [
      path.resolve(__dirname, 'assets/scripts/cookies.js')
    ],
    'pattern-library': [
      path.resolve(__dirname, 'node_modules/@scottish-government/pattern-library/src/scripts/accordion.js'),
      path.resolve(__dirname, 'node_modules/@scottish-government/pattern-library/src/scripts/notification-banner.js'),
      path.resolve(__dirname, 'node_modules/@scottish-government/pattern-library/src/scripts/side-navigation.js'),
      path.resolve(__dirname, 'node_modules/@scottish-government/pattern-library/src/scripts/site-navigation.js'),
      path.resolve(__dirname, 'node_modules/@scottish-government/pattern-library/src/scripts/site-search.js')
    ]
  },

  output: {
    path: path.resolve(__dirname, 'assets/scripts/dist'),
    filename: '[name].js'
  }
}, {
  mode: 'development',

  entry: {
    'cookie': [
      path.resolve(__dirname, 'assets/scripts/cookies.js')
    ],
    'pattern-library': [
      path.resolve(__dirname, 'node_modules/@scottish-government/pattern-library/src/scripts/accordion.js'),
      path.resolve(__dirname, 'node_modules/@scottish-government/pattern-library/src/scripts/notification-banner.js'),
      path.resolve(__dirname, 'node_modules/@scottish-government/pattern-library/src/scripts/side-navigation.js'),
      path.resolve(__dirname, 'node_modules/@scottish-government/pattern-library/src/scripts/site-navigation.js'),
      path.resolve(__dirname, 'node_modules/@scottish-government/pattern-library/src/scripts/site-search.js')
    ]
  },

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
