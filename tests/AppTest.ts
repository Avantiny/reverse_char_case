const assert = require('chai').assert
const app = require('../src/App.ts')

describe('App', () => {
  describe('processData()', () => {
    it('App should revert characters and switch case')
    let result = app.processData(['x', 'y', 'aBc'])
    assert.equal(result, 'CbA')
  })
  describe('constructJSON', () => {
    it('App should construct JSON')
    let result = app.constructJSON('aBc', 'CbA', 1000)
    assert.equal(
      result,
      `{
        "input": "aBc",
        "output": "CbA",
        "duration": 1000
      }`
    )
  })
})
