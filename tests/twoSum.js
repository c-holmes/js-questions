const assert = require('chai').assert;
const {twoSum} = require('../questions/twoSum.js');

describe('TwoSum', () => {
  it('given an array of [2, 7, 11, 15] with a target of 9, it should return [0, 1]', () => {
    assert.deepStrictEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
  });

  it('given an array of [3, 2, 3] with a target of 6, it should return [0, 2]', () => {
    assert.deepStrictEqual(twoSum([3, 2, 3], 6), [0, 2]);
  });

  it('given an array of [2, 3, 2, 3] with a target of 6, it should return [1, 3]', () => {
    assert.deepStrictEqual(twoSum([2, 3, 2, 3], 6), [1, 3]);
  });

  it('given an array of [-3, 4, 3, 90] with a target of 6, it should return [0, 2]', () => {
    assert.deepStrictEqual(twoSum([-3, 4, 3, 90], 0), [0, 2]);
  });
});