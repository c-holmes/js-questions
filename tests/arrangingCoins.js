const assert = require('assert');
const {arrangingCoins} = require('../questions/arrangingCoins.js');

describe('arrangingCoins', () => {
  it('8 coins makes 3 full steps', () => {
    assert.equal(arrangingCoins(8), 3);
  });

  it('3 coins makes 2 full steps', () => {
    assert.equal(arrangingCoins(3), 2);
  })

  it('0 coins makes 0 full steps', () => {
    assert.equal(arrangingCoins(0), 0);
  })
});