import { cyan, blue, magenta, yellow, red, green, underline } from 'colorette';

function transform (action, source, destination) {
  console.log(`${action} ${cyan(source)} to ${cyan(destination)}`);
}

function debug (message) {
  console.log(` - ${blue(message)}`);
}

function info (message) {
  console.log(magenta(message));
}

function warn (message) {
  console.log(yellow(message));
}

function error (message) {
  console.log(red(message));
}

function success (message) {
  console.log('');
  console.log(`${green('>>')} ${message}`);
}

function task (message) {
  console.log('');
  console.log(underline(message));
}

const log = { transform, debug, info, warn, error, success, task };

export { debug, log as default, error, info, success, task, transform, warn };
