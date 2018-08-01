[![Build Status](https://travis-ci.org/pelevesque/is-array-in-array.svg?branch=master)](https://travis-ci.org/pelevesque/is-array-in-array)
[![Coverage Status](https://coveralls.io/repos/github/pelevesque/is-array-in-array/badge.svg?branch=master)](https://coveralls.io/github/pelevesque/is-array-in-array?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# is-array-in-array

Finds out if an array is in an array.

## Node Repository

[https://www.npmjs.com/package/@pelevesque/is-array-in-array](https://www.npmjs.com/package/@pelevesque/is-array-in-array)

## Installation

`npm install @pelevesque/is-array-in-array`

## Tests

### Standard Style & Unit Tests

`npm test`

### Unit Tests & Coverage

`npm run cover`

## Usage

```js
const isArrayInArray = require('@pelevesque/is-array-in-array')
const arr = [1, 1]
const arrToCheckIn = [ [1, 0], [1, 1], [1, 2] ]
const result = isArrayInArray(arrToCheckIn, arr)
// result === true
```
