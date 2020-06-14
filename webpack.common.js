const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'k014\'s WTF',

      // https://github.com/jaketrent/html-webpack-template
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'app',
      scripts: ['main.js'],
    }),
  ],
};
