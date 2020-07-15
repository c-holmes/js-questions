const assert = require("chai").assert;
const {sortFiftyAndBelow} = require('../questions/sortFiftyAndBelow.js');

describe('sortFiftyAndBelow', () => {
  it('in the array [51,20,30,50,55,2,200], the returned array should be [51,50,55,200,30,2,20]', () => {
    assert.deepStrictEqual(sortFiftyAndBelow([51,20,30,50,55,2,200]), [51,50,55,200,30,2,20]);
  })

  it('in the array [1,2,80,20,95,1,2], the returned array should be [80,95,1,20,2,1,2]', () => {
    assert.deepStrictEqual(sortFiftyAndBelow([1,2,80,20,95,1,2]), [80,95,1,20,2,1,2]);
  })
});