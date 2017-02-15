var plugins = {
  //es2015
  transformEs2015ModuleCommonjs: require('babel-plugin-transform-es2015-modules-commonjs'),
  //es2016
  transformExponentiationOperator: require('babel-plugin-transform-exponentiation-operator'),
  //es2017
  syntaxTrailingFunctionCommas: require('babel-plugin-syntax-trailing-function-commas'),
  transformAsyncToGenerator: require('babel-plugin-transform-async-to-generator'),
  transformRuntime: [require('babel-plugin-transform-runtime'), {}],
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