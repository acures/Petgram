const HtmlWbpackPlugin = require('html-webpack-plugin')

module.exports = {
  output: {
    filename: 'app.buncdle.js'
  },
  plugins: [
    new HtmlWbpackPlugin({
      template: 'src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_module/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}
