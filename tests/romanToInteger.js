const assert = require('chai').assert;
const {romanToInteger} = require('../questions/romanToInteger.js'); 

describe('romanToInteger', () => {
  it('given a string I, it should return 1', () => {
    assert.equal(romanToInteger('I'), 1);
  });

  it('given a string X, it should return 10', () => {
    assert.equal(romanToInteger('X'), 10);
  });

  it('given a string IV, it should return 4', () => {
    assert.equal(romanToInteger('IV'), 4);
  });

  it('given a string III, it should return 3', () => {
    assert.equal(romanToInteger('III'), 3);
  });

  it('given a string LVIII, it should return 58', () => {
    assert.equal(romanToInteger('LVIII'), 58);
  });

  it('given a string MCMXCIV, it should return 1994', () => {
    assert.equal(romanToInteger('MCMXCIV'), 1994);
  });
});