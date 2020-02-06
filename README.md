[![Build Status](https://travis-ci.org/pelevesque/is-array-in-array.svg?branch=master)](https://travis-ci.org/pelevesque/is-array-in-array)
[![Coverage Status](https://coveralls.io/repos/github/pelevesque/is-array-in-array/badge.svg?branch=master)](https://coveralls.io/github/pelevesque/is-array-in-array?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# is-array-in-array

Checks if an array is in an array.

## Node Repository

https://www.npmjs.com/package/@pelevesque/is-array-in-array

## Installation

`npm install @pelevesque/is-array-in-array`

## Tests

Command                      | Description
---------------------------- | ------------
`npm test` or `npm run test` | All Tests Below
`npm run cover`              | Standard Style
`npm run standard`           | Coverage
`npm run unit`               | Unit Tests

## Usage

```js
const isArrayInArray = require('@pelevesque/is-array-in-array')
```

```js
const arr = [1, 1]
const arrToCheckIn = [[1, 0], [1, 1], [1, 2]]
const result = isArrayInArray(arr, arrToCheckIn)
// result === true
```
