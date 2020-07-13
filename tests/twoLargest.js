const assert = require('assert');
const {twoLargest} = require('../questions/twoLargest.js');

describe('twoLargest', () => {
  it('the two largest integers in [2, 4, 3, 2] is 7', () => {
    assert.equal(twoLargest([2, 4, 3, 2]), 7);
  });

  it('the two largest integers in [12, 34, 10, 6, 40] is 74', () => {
    assert.equal(twoLargest([12, 34, 10, 6, 40]), 74);
  });
});