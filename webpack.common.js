const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
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
