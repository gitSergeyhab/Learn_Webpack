const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 4200
    },

    // devServer: {
    //     overlay: true,
    //     open: true
    //   },
    plugins: [
        new HTMLPlugin({
            filename: "index.html",
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'allstyle.css'
        })
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
          }
        ]
      },
    optimization: {
        minimize: true,
        minimizer: [
          // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
          `...`,
          new CssMinimizerPlugin({}),
        ],
      },
}