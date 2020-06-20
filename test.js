const test = require('ava')
const log = require('./index.cjs')
const sinon = require('sinon')

test('task', async t => {
  const spy = sinon.spy(console, 'log')
  log.task('Compiling the universe')
  t.is(spy.callCount, 2)
  t.is(spy.firstCall.args[0], '')
  t.is(spy.secondCall.args[0], '\u001b[4mCompiling the universe\u001b[24m')
})
