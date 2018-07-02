'use strict'

module.exports = (arr, arrToCheckIn) =>
  JSON.stringify(arrToCheckIn).indexOf(JSON.stringify(arr)) !== -1
