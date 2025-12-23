const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = {
  output: {
    uniqueName: 'my-host',
    publicPath: 'auto',
  },
  Plugins: [
    new withModuleFederationPlugin({
      library: { type: 'module'},
      shared: {
        ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
      },
    })
  ]

};
