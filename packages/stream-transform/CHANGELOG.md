# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.1.2](https://github.com/adaltas/node-stream-transform/compare/stream-transform@2.1.1...stream-transform@2.1.2) (2021-08-27)

**Note:** Version bump only for package stream-transform





## 2.1.1 (2021-08-27)

### Bug Fixes

* **stream-transform:** finish event call multiple times ([4f45103](https://github.com/adaltas/node-stream-transform/commit/4f451038ef083b65d58ccee6fe3d041b106cc1cf))

## Version 2.1.0

* chore: use browserify

## Version 2.0.4

* fix: add ts generics to handler

## Version 2.0.3

* package: latest dependencies
* ts: enable strict mode
* package: mocha inside package declaration

## Version 2.0.2

* handler: update Typescript signature
* test: ensure every sample is valid
* package: contributing
* package: code of conduct

## Version 2.0.1

* package: prefix file path with "/"
* package: rename coffee cmd to build
* handler: preserve ordering with sync handler
* package: replace npm ignore with file field

## Version 2.0.0

Breaking changes:
* state: isolate properties into the "state" property

New Features:
* typescript: new ts definitions

Minor enhancements:
* api: clone options
* api: simplify argument discovery
* project: fix license in package.json
* babel: include .babelrc to git
* package: latest dependencies

## Version 1.0.8

Project Management

* package: update license to MIT
* travis: test against Node.js 11

## Version 1.0.7

* readme: fix website urls

## Version 1.0.6

* readme: fix links to project website

## Version 1.0.5

* package: move to csv.js.org
* package: upgrade dependencies including babel 7
* example: new sequential mode sample
* examples: new state examples
* examples: new api sync example
* examples: new mixed output stream example
* handler: bind execution context with current instance

## Version 1.0.4

* readme: update travis badge

## Version 1.0.3

* travis: support Node.js 10
* package: improve ignore files
* samples: update syntax
* sync: new module to ease synchronous usage
* stream: dont push empty string

## Version 1.0.2

* package: move babel to dev dependencies

## Version 1.0.1

* package: es5 backward compatibility
* package: ignore yarn lock file

## v0.2.0

* test: should require handled by mocha
* package: coffeescript 2 and use semver tilde
