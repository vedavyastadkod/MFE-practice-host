const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  output: {
    uniqueName: 'my-host',
    publicPath: 'auto',
  },
  remotes: {
    "mfe1": "http://localhost:3000/remoteEntry.js",    
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
