'use strict'

const traverse = require('traverse')

module.exports = deindex

function deindex (obj) {
  return traverse(obj).map(function (value) {
    if (!value) return
    const keys = Object.keys(value)
    if (keys.length === 1 && keys[0] === 'index') {
      this.update(value.index)
    }
  })
}
