import { processData } from '../src/processData'
import chai from 'chai'
import cli from '../src/cli'
const assert = chai.assert

describe('processData()', () => {
  it('App should revert characters and switch case', () => {
    let result = processData('aBcDe123')
    assert.equal(result, '321EdCbA')
  })
})
describe('validateArgv()', () => {
  it('Error: Non-alphanumeric arguments given!', () => {
    assert.throw(() => cli.validateArgv('/*!'), Error)
  })
  it('Error: No parameter given!', () => {
    assert.throw(() => cli.validateArgv(''), Error)
  })
  it('This should throw no error', () => {
    assert.equal(cli.validateArgv('aBcDe123'), undefined)
  })
})
describe('nanosecToMilisec()', () => {
  it('App should convert time correctly', () => {
    assert.equal(cli.nanosecToMilisec([1, 23456789]), 1023.456789)
  })
})
describe('ALPHANUMERIC', () => {
  it('True for empty string', () => {
    assert.equal(cli.ALPHANUMERIC.test(''), true)
  })
  it('True for string abcdef', () => {
    assert.equal(cli.ALPHANUMERIC.test('abcdef'), true)
  })
  it('True for string 123456', () => {
    assert.equal(cli.ALPHANUMERIC.test('123456'), true)
  })
  it('False for ~!@#$%^&*()', () => {
    assert.equal(cli.ALPHANUMERIC.test('~!@#$%^&*()'), false)
  })
  it('False for abc.123', () => {
    assert.equal(cli.ALPHANUMERIC.test('abc.123'), false)
  })
})
