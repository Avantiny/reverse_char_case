import app from '../src/app'
import chai from 'chai'
const assert = chai.assert

describe('App', () => {
  describe('processData()', () => {
    it('App should revert characters and switch case', () => {
      let result = app.processData('aBcDe123')
      assert.equal(result, '321EdCbA')
    })
  })
  describe('validateArgv()', () => {
    it('Error: Too many parameters given!', () => {
      let args = ['x', 'y', 'z', 'u']
      assert.throw(() => app.validateArgv(args), Error)
    })
    it('Error: Non-alphanumeric arguments given!', () => {
      let args = ['x', 'y', '/*!']
      assert.throw(() => app.validateArgv(args), Error)
    })
    it('Error: No parameter given!', () => {
      let args = ['x', 'y']
      assert.throw(() => app.validateArgv(args), Error)
    })
    it('This should throw no error', () => {
      let args = ['x', 'y', 'aBcDe123']
      assert.equal(app.validateArgv(args), undefined)
    })
  })
  describe('nanosecToMilisec()', () => {
    it('App should convert time correctly', () => {
      assert.equal(app.nanosecToMilisec([1, 23456789]), 1023.456789)
    })
  })
})
