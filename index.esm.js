import colors from 'colors/safe';

function transform (action, source, destination) {
  console.log(action + ' ' + colors.cyan(source) + ' to ' + colors.cyan(destination));
}

function debug (message) {
  console.log(' - ' + colors.blue(message));
}

function info (message) {
  console.log(colors.magenta(message));
}

function warn (message) {
  console.log(colors.yellow(message));
}

function error (message) {
  console.log(colors.red(message));
}

function success (message) {
  console.log('');
  console.log(colors.green('>>') + ' ' + message);
}

function task (message) {
  console.log('');
  console.log(colors.underline(message));
}

const log = { transform, debug, info, warn, error, success, task };

export default log;
export { debug, error, info, success, task, transform, warn };
