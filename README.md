# babel-preset-think-node

[![npm](https://img.shields.io/npm/v/babel-preset-think-node.svg)](https://www.npmjs.com/package/babel-preset-think-node)


babel preset for `ThinkJS 3.x`, with @babel/preset-env & @babel/plugin-transform-runtime

## Install

```
npm install --save-dev babel-preset-think-node
```

## Usage

### `.babelrc`

```js
{
  "presets": ["think-node", {/* @babel/preset-env options */}]
}
```
### CLI

```
babel script.js --presets think-node
```

### Node API

```js
require('babel-core').transform('code', {
  presets: ['think-node', {/* @babel/preset-env options */}]
});
```

### Options

set option for all plugin in object first level, or specific plugin by plugin name.

```js
{
  "presets": [
    ["think-node", {
      // @babel/preset-env options
    }]
  ]
}
```

####  @babel/preset-env default options

```js
const defaultPresetOptions = {
  targets: { node: '8' },
  modules: 'auto',
  debug: false,
  useBuiltIns: 'usage',
  corejs: 2,
}
```
