const assert = require('chai').assert;
const {findMaxMeetingsPerDay} = require('../questions/findMaxMeetingsPerDay.js');

describe('findMaxMeetingsPerDay', () => {
  it('given an array like [2,5,6,8,3,2], it should return [[8],[6,2],[5,3],[2]]', () => {
    assert.deepEqual(
      findMaxMeetingsPerDay([2,5,6,8,3,2]),
      [[8],[6,2],[5,3],[2]]
    );
  })

  it('given an array like [1,5,6,8,3], it should return [[8],[6,1],[5,3]]', () => {
    assert.deepEqual(
      findMaxMeetingsPerDay([1,5,6,8,3]),
      [[8],[6,1],[5,3]]
    );
  })
})