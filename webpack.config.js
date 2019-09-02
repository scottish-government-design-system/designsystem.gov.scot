const path = require('path');

module.exports = [{
  mode: 'development',

  entry: {
    'cookie': [
      path.resolve(__dirname, 'assets/scripts/cookies.js')
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
