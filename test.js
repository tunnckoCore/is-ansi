/*!
 * is-ansi <https://github.com/tunnckoCore/is-ansi>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var isAnsi = require('./index')

test('should return true if contain ANSI codes', function (done) {
  test.equal(isAnsi('foo\u001b[4mcake\u001b[0m'), true)
  done()
})
test('should return false if dont have ANSI codes', function (done) {
  test.equal(isAnsi('cake'), false)
  done()
})

