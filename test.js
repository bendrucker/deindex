'use strict'

var test = require('tape')
var deindex = require('./')

test(function (t) {
  t.deepEqual(
    deindex({foo: {bar: {index: 'baz'}}}),
    {foo: {bar: 'baz'}}
  )

  t.deepEqual(
    deindex({foo: {bar: {index: 'baz'}}, beep: 'boop'}),
    {foo: {bar: 'baz'}, beep: 'boop'}
  )

  const input = {foo: 'bar'}
  t.notEqual(deindex(input), input, 'immutable')

  t.end()
})
