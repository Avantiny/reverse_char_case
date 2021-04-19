import { processData } from '../src/processData'
import chai from 'chai'
import cli from '../src/cli'
const assert = chai.assert

describe('App', () => {
  describe('processData()', () => {
    it('App should revert characters and switch case', () => {
      let result = processData('aBcDe123')
      assert.equal(result, '321EdCbA')
    })
  })
  describe('validateArgv()', () => {
    it('Error: Too many parameters given!', () => {
      let args = ['x', 'y', 'z', 'u']
      assert.throw(() => cli.validateArgv(args), Error)
    })
    it('Error: Non-alphanumeric arguments given!', () => {
      let args = ['x', 'y', '/*!']
      assert.throw(() => cli.validateArgv(args), Error)
    })
    it('Error: No parameter given!', () => {
      let args = ['x', 'y']
      assert.throw(() => cli.validateArgv(args), Error)
    })
    it('This should throw no error', () => {
      let args = ['x', 'y', 'aBcDe123']
      assert.equal(cli.validateArgv(args), undefined)
    })
  })
  describe('nanosecToMilisec()', () => {
    it('App should convert time correctly', () => {
      assert.equal(cli.nanosecToMilisec([1, 23456789]), 1023.456789)
    })
  })
})
