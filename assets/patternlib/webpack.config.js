const path = require('path');

module.exports = {
  mode: 'development',

  entry: {
    'pattern-library.js': [
      path.resolve(__dirname, 'scripts/accordion.js'),
      path.resolve(__dirname, 'scripts/notification-banner.js'),
      path.resolve(__dirname, 'scripts/side-navigation.js'),
      path.resolve(__dirname, 'scripts/site-navigation.js'),
      path.resolve(__dirname, 'scripts/site-search.js')
    ]
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]'
  }
};
