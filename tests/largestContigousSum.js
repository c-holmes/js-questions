const assert = require('chai').assert;
const {getLargestContigousSum} = require('../questions/largestContigousSum.js');

describe('getLargestContigousSum', () => {
  it('given an array of [-10,2,3,-2,0,5,-15] the sum should be 8', () => {
    assert(getLargestContigousSum([-10,2,3,-2,0,5,-15]), 8);
  })

  it('given an array of [2,2,3,-2,10,-5,15] the sum should be 15', () => {
    assert(getLargestContigousSum([2,2,3,-2,10,-5,15]), 15);
  })
})
