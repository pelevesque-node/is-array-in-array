'use strict'

module.exports = (arrToCheckIn, arr) =>
  JSON.stringify(arrToCheckIn).indexOf(JSON.stringify(arr)) !== -1
