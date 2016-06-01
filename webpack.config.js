const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const proxy = require('./server/webpack-dev-proxy');

function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') {
    sources.push('webpack-hot-middleware/client?http://localhost:8080');
    sources.push('webpack/hot/dev-server');
  }
  return sources;
}

const basePlugins = [
  new webpack.DefinePlugin({
    __DEV__: process.env.NODE_ENV !== 'production',
    __PRODUCTION__: process.env.NODE_ENV === 'production',
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
  new HtmlWebpackPlugin({
    template: './src/index.html',
    inject: 'body'
  }),
  new ExtractTextPlugin('style.css', { allChunks: true }),
];

const devPlugins = [
  new webpack.NoErrorsPlugin()
];

const prodPlugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false,
    },
  }),
];

const plugins = basePlugins
  .concat(process.env.NODE_ENV === 'production' ? prodPlugins : [])
  .concat(process.env.NODE_ENV === 'development' ? devPlugins : []);

// css local
// https://medium.com/seek-ui-engineering/the-end-of-global-css-90d2a4a06284#.c2jl6jmb8
// and https://github.com/camsong/blog/issues/5
const localIdentName=  '('+ process.env.NODE_ENV === 'development' ? '[name]__[local]___[hash:base64:5]' : '[hash:base64:5]' +')';

module.exports = {
  entry: getEntrySources(['./src/index.js']),
  vendor: [
    'es5-shim',
    'es6-shim',
    'es6-promise',
    'react',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
    sourceMapFilename: '[name].[hash].js.map',
    chunkFilename: '[id].chunk.js',
  },
  devServer: {
    historyApiFallback: { index: '/' },
    proxy: proxy(),
  },
  module: {
    preLoaders: [
     { test: /\.js$/, loader: 'source-map-loader' },
     // { test: /\.js$/, loader: 'eslint-loader' },
    ],
    loaders: [
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName='+localIdentName+'!sass-loader') },
      //{ test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName='+localIdentName) },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.jsx?$/, loader: 'babel', include: path.join(__dirname, 'src'), exclude: /node_modules/},
      { test: /\.(png|jpg|jpeg|gif|svg)$/, loader: 'url-loader?prefix=img/&limit=5000' },
      { test: /\.(woff|woff2|ttf|eot)$/, loader: 'url-loader?prefix=font/&limit=5000' },
    ]
  },
  devtool: 'source-map',
  plugins: plugins,
  resolve: {
    extensions: ['', '.js', '.json', '.jsx']
  }
};
