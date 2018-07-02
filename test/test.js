/* globals describe, it */
'use strict'

const expect = require('chai').expect
const isArrayInArray = require('../index')

describe('#is-array-in-array()', () => {
  it('should return true if array is in array', () => {
    const array = [0, 1]
    const arrayToCheckIn = [ [0, 1], [1, 2], [2, 3] ]
    const result = isArrayInArray(array, arrayToCheckIn)
    const expected = true
    expect(result).to.equal(expected)
  })

  it('should return false if array is not in array', () => {
    const array = [1, 1]
    const arrayToCheckIn = [ [0, 1], [1, 2], [2, 3] ]
    const result = isArrayInArray(array, arrayToCheckIn)
    const expected = false
    expect(result).to.equal(expected)
  })
})
