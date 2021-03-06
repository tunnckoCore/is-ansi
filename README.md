# is-ansi [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Check that given string contain ANSI color codes, without CLI

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i is-ansi --save
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var isAnsi = require('is-ansi')

isAnsi('\u001b[4mCharlike\u001b[0m')
//=> true

isAnsi('Charlike')
//=> false
```


## Related
- [has-ansi](https://github.com/sindresorhus/has-ansi): Check if a string has ANSI escape codes
- [has-value](https://github.com/jonschlinkert/has-value): Returns true if a value exists, false if empty. Works… [more](https://github.com/jonschlinkert/has-value)
- [is-match](https://github.com/jonschlinkert/is-match): Create a matching function from a glob pattern, regex, string,… [more](https://github.com/jonschlinkert/is-match)
- [is-missing](https://github.com/tunnckoCore/is-missing): Check that given `name` or `user/repo` exists in npm registry… [more](https://github.com/tunnckoCore/is-missing)
- [is-installed](https://github.com/tunnckoCore/is-installed): Checks that given package is installed on the system -… [more](https://github.com/tunnckoCore/is-installed)
- [is-es6-generators](https://github.com/tunnckocore/is-es6-generators): Check whether a value is a `Generator` or `GeneratorFunction`. The… [more](https://github.com/tunnckocore/is-es6-generators)
- [micromatch](https://github.com/jonschlinkert/micromatch): Glob matching for javascript/node.js. A drop-in replacement and faster… [more](https://github.com/jonschlinkert/micromatch)
- [verb](https://github.com/assemble/verb): Documentation generator for GitHub projects. Extremely powerful, easy to use,… [more](https://github.com/assemble/verb)


## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/is-ansi/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/is-ansi
[npmjs-img]: https://img.shields.io/npm/v/is-ansi.svg?label=is-ansi

[license-url]: https://github.com/tunnckoCore/is-ansi/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/is-ansi
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/is-ansi.svg

[travis-url]: https://travis-ci.org/tunnckoCore/is-ansi
[travis-img]: https://img.shields.io/travis/tunnckoCore/is-ansi.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/is-ansi
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/is-ansi.svg

[david-url]: https://david-dm.org/tunnckoCore/is-ansi
[david-img]: https://img.shields.io/david/tunnckoCore/is-ansi.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/send%20me-message-green.svg
