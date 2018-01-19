const path = require('path');

module.exports = {
  entry: {
    main: "./index.js"
  },
  output: {
    path: __dirname,
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.scss$/, loaders: ["style-loader", "css-loader"] },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.css']
  },
  devServer: {
  contentBase: '.',
  host: '0.0.0.0',
  port: 3000,
  disableHostCheck: true
  }
};
