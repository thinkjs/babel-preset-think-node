# babel-preset-think-node
babel plugin preset for thinkjs


### Included plugins

- ES2015
  - modules ([transform-es2015-modules-commonjs](http://babeljs.io/docs/plugins/transform-es2015-modules-commonjs))
- ES2016
  - exponentiation operator ([transform-exponentiation-operator](http://babeljs.io/docs/plugins/transform-exponentiation-operator))
- ES2017
  - trailing function commas ([syntax-trailing-function-commas](http://babeljs.io/docs/plugins/syntax-trailing-function-commas))
  - async / await ([transform-async-to-generator](http://babeljs.io/docs/plugins/transform-async-to-generator))
- babel-transform-runtime


## Install

```
npm install --save-dev babel-preset-think-node
```

## Usage

### `.babelrc`

```
{
  "presets": ["think-node"]
}
```
### CLI

```
babel script.js --presets think-node
```

### Node API

```
require('babel-core').transform('code', {
  presets: ['think-node']
});
```

### Options

set option for all plugin in object first level, or specific plugin by plugin name.

```
{
  "presets": [
    ["think-node", {
      "loose": true,
      "transform-es2015-modules-commonjs": {
        "allowTopLevelThis": true
      },
      "transform-runtime": {
        "helpers": false,
        "polyfill": false,
        "regenerator": true,
        "moduleName": "babel-runtime"
      }
    }]
  ]
}
```