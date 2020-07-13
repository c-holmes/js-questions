const assert = require('assert');
const {getNLargest} = require('../questions/getNLargest.js');

describe('getNLargest', () => {
  it('getting the sum of 3 largest integers from an array of [1,2,5,3,7,6,9] is 22', () => {
    assert.equal(getNLargest([1,2,5,3,7,6,9], 3), 22);
  })

  it('getting the sum of 2 largest integers from an array of [1,2,5,3,7,6,9] is 16', () => {
    assert.equal(getNLargest([1,2,5,3,7,6,9], 2), 16);
  })

  it('getting the sum of 3 largest integers from an array of [1,9,5,3,7,6,9] is 25', () => {
    assert.equal(getNLargest([1,9,5,3,7,6,9], 3), 25);
  })
})