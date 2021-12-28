'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var colorette = require('colorette');

function transform (action, source, destination) {
  console.log(`${action} ${colorette.cyan(source)} to ${colorette.cyan(destination)}`);
}

function debug (message) {
  console.log(` - ${colorette.blue(message)}`);
}

function info (message) {
  console.log(colorette.magenta(message));
}

function warn (message) {
  console.log(colorette.yellow(message));
}

function error (message) {
  console.log(colorette.red(message));
}

function success (message) {
  console.log('');
  console.log(`${colorette.green('>>')} ${message}`);
}

function task (message) {
  console.log('');
  console.log(colorette.underline(message));
}

const log = { transform, debug, info, warn, error, success, task };

exports.debug = debug;
exports["default"] = log;
exports.error = error;
exports.info = info;
exports.success = success;
exports.task = task;
exports.transform = transform;
exports.warn = warn;
