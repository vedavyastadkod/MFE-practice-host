
const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { shareAll } = require('@angular-architects/module-federation/webpack');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {

  output: {
    uniqueName: 'my-host',
    publicPath: 'auto'
  },
  optimization: {
    runtimeChunk: false,
  },
  // Only if you use library.type = 'module'
  experiments: {
    outputModule: true,
  },

  plugins: [
    // Optional but recommended to ensure index.html is handled cross-platform
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, 'src/index.html'),
    // }),

    new ModuleFederationPlugin({

      library: { type: 'module' },

      remotes: {
        // remoteApp: 'my-products-mfe@https://d5r4e842o6tb5.cloudfront.net/remoteEntry.js'
      },
      exposes: {
        // './Widget': './src/app/widget/widget.module.ts'
      },
      shared: {
        ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
      },
    }),
  ].filter(Boolean),
};
