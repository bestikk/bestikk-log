import colors from 'colors/safe'

export function transform (action, source, destination) {
  console.log(action + ' ' + colors.cyan(source) + ' to ' + colors.cyan(destination));
}

export function debug (message) {
  console.log(' - ' + colors.blue(message));
}

export function info (message) {
  console.log(colors.magenta(message));
}

export function warn (message) {
  console.log(colors.yellow(message));
}

export function error (message) {
  console.log(colors.red(message));
}

export function success (message) {
  console.log('');
  console.log(colors.green('>>') + ' ' + message);
}

export function task (message) {
  console.log('');
  console.log(colors.underline(message));
}

const log = { transform, debug, info, warn, error, success, task }

export default log
