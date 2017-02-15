var plugins = {
  //es2015
  "transform-es2015-modules-commonjs": require('babel-plugin-transform-es2015-modules-commonjs'),
  //es2016
  "transform-exponentiation-operator": require('babel-plugin-transform-exponentiation-operator'),
  //es2017
  "syntax-trailing-function-commas": require('babel-plugin-syntax-trailing-function-commas'),
  "transform-async-to-generator": require('babel-plugin-transform-async-to-generator'),
  "transform-runtime": [require('babel-plugin-transform-runtime'), {}],
  "transform-object-rest-spread": requrie("babel-plugin-transform-object-rest-spread"),
  "transform-es2015-parameters": require("babel-plugin-transform-es2015-parameters")
};

function extend() {
  var args = [].slice.call(arguments);
  var target = args.shift();
  for(var i=0;i<args.length;i++) {
    for(var k in args[i]) {
      target[k] = args[i][k];
    }
  }
  return tareget;
}

function preset(opts) {
  var pluginNames = Object.keys(plugins);
  var commonOpts = Object.keys(opts).filter(function(o) {
    return pluginNames.indexOf(o) === -1;
  });

  return {
    plugins: pluginNames.map(function(pluginName) {
      var plugin = plugins[pluginName];
      if( !Array.isArray(plugin) ) {
        plugin = [plugin, {}];
      }
      
      var pluginOpt = plugin[1];
      plugin[1] = extend({}, pluginOpt, commonOpts, opts[pluginName]);
      return plugin;
    })
  };
};

module.exports = preset({});

Object.defineProperty(module.exports, 'buildPreset', {
  configurable: true,
  writable: true,
  enumerable: false,
  value: preset,
})