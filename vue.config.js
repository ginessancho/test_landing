const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  configureWebpack: {
    resolve: {
      plugins: [
        new TsconfigPathsPlugin({
          extensions: ['.ts', '.tsx', '.vue', '.js', '.jsx']
        })
      ]
    }
  }
}
