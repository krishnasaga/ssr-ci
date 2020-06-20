const path = require('path');
const context = process.cwd();
var nodeExternals = require('webpack-node-externals');

module.exports = (env) => {
  return {
    context,
    mode: env.NODE_ENV || "production",
    entry: path.resolve(context,"src","server.js"),
    output: {
      path: path.resolve(context, "node-build")
    },
    externals: [nodeExternals()],
    target: 'node',
    node: {
      __dirname: false
    },
    module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
}
