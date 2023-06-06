/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { EsbuildPlugin } = require('esbuild-loader');
const baseWebpackConfig = require('./webpack.config');

module.exports = {
  ...baseWebpackConfig,
  mode: 'production',
  optimization: {
    minimizer: [
      new EsbuildPlugin({
        target: 'es2021'
      })
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Loan Calculator'
    })
  ]
};
