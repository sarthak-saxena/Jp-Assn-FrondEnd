const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

// const devBuild = process.env.NODE_ENV !== 'production';
// const nodeEnv = devBuild ? 'development' : 'production';
const devBuild = process.env.NODE_ENV === 'development';
const testBuild = process.env.NODE_ENV === 'test';
const nodeEnv = devBuild ? 'development' : (testBuild ? 'test' : 'production');
const apiHost = devBuild ? 'http://localhost:3000' : testBuild ?
 'https://staging.adwyze.com' : 'https://platform.adwyze.com';

const config = {
  entry: [
    'es5-shim/es5-shim',
    'es5-shim/es5-sham',
    'babel-polyfill',
    './client/index.js',
  ],

  output: {
    filename: 'webpack-bundle.js',
    path: path.resolve('dist'),
  },

  resolve: {
    extensions: ['*', '.js', '.jsx', '.css', '.scss', '.png'],
    alias: {
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
      images: path.resolve('./client/assets/images')
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv),
        API_HOST: JSON.stringify(apiHost)
      },
    }), HtmlWebpackPluginConfig
  ],
  module: {
    rules: [{
      test: require.resolve('react'),
      loader: 'imports-loader?shim=es5-shim/es5-shim&sham=es5-shim/es5-sham',
    }, {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader?url=false!sass-loader'
    }]
  },
  devServer: {
    historyApiFallback: true
  }
};

module.exports = config;

if (devBuild) {
  console.log('Webpack dev build for Rails'); // eslint-disable-line no-console
  module.exports.devtool = 'eval-source-map'; // Much faster for rebuilds. It cache SourceMaps for modules. // https://webpack.github.io/docs/build-performance.html
} else {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      output: {
        comments: false
      },
      sourceMap: false,
      mangle: false
    })
  );
  console.log('Webpack production build for Rails'); // eslint-disable-line no-console
}
