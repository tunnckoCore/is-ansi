/*!
 * is-ansi <https://github.com/tunnckoCore/is-ansi>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var ansiRegex = require('ansi-regex')

module.exports = function isAnsi (str) {
  return ansiRegex().test(str)
}
