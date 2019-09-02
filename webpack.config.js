const path = require('path');

module.exports = {
  mode: 'development',

  entry: {
    'cookie.js': [
      path.resolve(__dirname, 'assets/scripts/cookies.js')
    ]
  },

  output: {
    path: path.resolve(__dirname, 'assets/scripts/dist'),
    filename: '[name]'
  }
};
