'use strict';
const path = require('path');

module.exports = {
  mode: "development",
  entry: [
    path.resolve(__dirname, 'src') + 'index.js'
  ],
  output: {
    webassemblyModuleFilename: "[hash].wasm",
    publicPath: "dist/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {presets: ["@babel/env"]},

        },

      },
      {
        test: /\.wasm$/,
        type: "webassembly/async"
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true, // true outputs JSX tags
              svgo: {
                plugins: [
                  {
                    removeViewBox: false,
                  }
                ]
              }
            }
          },

        ]
      },
      {
        test: /\.css$/i,
        use: ['css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },{
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader',
        options: {
          limit:100000
        }
      }
    ]
  },
  optimization: {
    chunkIds: "deterministic" // To keep filename consistent between different modes (for example building only)
  },
  experiments: {
    asyncWebAssembly: true,
    importAwait: true,
    topLevelAwait: true,
  }
};