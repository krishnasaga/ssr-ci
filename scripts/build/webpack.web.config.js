const path = require('path');
const context = process.cwd();

module.exports = (env) => {
  return {
    context: process.cwd(),
    mode: env.NODE_ENV || "production",
    entry: path.resolve(context,"src","index.js"),
    output: {
      path: path.resolve(context, "web-build"),
      filename: 'index.js',
      publicPath: '/public/'
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ]
    }
  }
};
