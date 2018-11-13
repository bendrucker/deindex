# deindex [![Build Status](https://travis-ci.org/bendrucker/deindex.svg?branch=master)](https://travis-ci.org/bendrucker/deindex) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/deindex.svg)](https://greenkeeper.io/)

> Flatten an object with `index` keys

Useful for representing modular folder structures with `index.*` files as the "main" file in a proper tree.

## Install

```
$ npm install --save deindex
```


## Usage

```js
var deindex = require('deindex')

deindex({foo: {bar: {index: 'baz'}}})
//=> {foo: {bar: 'baz'}}
```

## API

#### `deindex(obj)` -> `object`

##### obj

*Required*  
Type: `object`

Traverses the object and returns a new object with lone `index` keys flattened out.


## License

MIT © [Ben Drucker](http://bendrucker.me)
