# Bestikk Log

[![npm version](http://img.shields.io/npm/v/bestikk-log.svg)](https://www.npmjs.org/package/bestikk-log)

A simple console logger for your Node build scripts.

## Install

    $ npm i --save-dev bestikk-log

## Usage

```javascript
import * as log from 'bestikk-log'

log.debug('So far, so good.')
log.info('Heads up')
log.warn('Warning!')
log.error('Oh snap!')
log.success('Well done!')

log.task('Compiling the universe')

log.transform('Uglify', 'index.js', 'index.min.js')
```
