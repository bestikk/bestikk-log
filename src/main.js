import { blue, cyan, green, magenta, red, underline, yellow } from 'colorette'

export function transform (action, source, destination) {
  console.log(`${action} ${cyan(source)} to ${cyan(destination)}`)
}

export function debug (message) {
  console.log(` - ${blue(message)}`)
}

export function info (message) {
  console.log(magenta(message))
}

export function warn (message) {
  console.log(yellow(message))
}

export function error (message) {
  console.log(red(message))
}

export function success (message) {
  console.log('')
  console.log(`${green('>>')} ${message}`)
}

export function task (message) {
  console.log('')
  console.log(underline(message))
}

const log = { transform, debug, info, warn, error, success, task }

export default log
