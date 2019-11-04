# type

[![node version][node-image]][node-url]
[![license][license-image]][license-url]

[node-image]: https://img.shields.io/badge/node-%3E%3D12.4.0-brightgreen?style=flat-square
[node-url]: http://nodejs.org/download/
[license-image]: https://img.shields.io/github/license/agte/type?style=flat-square
[license-url]: https://github.com/agte/type/blob/master/LICENSE

Пакет содержит проверки типов переменных в компактном виде

## Install

```bash
$ npm install https://github.com/agte/type.git#1.0.0
```

## Usage

```js
import { assert } from '@agte/type';

function doSomething(name, age) {
  assert.string(name); // throws a TypeError if the argument is not a string
  assert.number(age); // throws a TypeError if the argument is not a number

  // ... main logic
}
```

## API

### Assertions

* assert.string(value)
* assert.nonEmptyString(value)
* assert.number(value)
* assert.integer(value)
* assert.boolean(value)
* assert.array(value)
* assert.object(value)
* assert.function(value)
* assert.class(value)

### Checks

Will be added later.