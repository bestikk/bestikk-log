import test from 'ava'
import log from './dist/index.cjs'
import sinon from 'sinon'

test('task', async t => {
  const spy = sinon.spy(console, 'log')
  log.task('Compiling the universe')
  t.is(spy.callCount, 2)
  t.is(spy.firstCall.args[0], '')
  t.true(spy.secondCall.args[0].includes('Compiling the universe'), 'message should include \'Compiling the universe\'')
})
