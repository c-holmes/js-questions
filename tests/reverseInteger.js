const assert = require('chai').assert;
const {reverse} = require("../questions/reverseInteger.js");

describe('reverseInteger', () => {
  it('given an integer of 123, it should return 321', () => {
    assert.equal(reverse(123), 321);
  });
  it('given an integer of 120, it should return 21', () => {
    assert.equal(reverse(120), 21);
  });
  it('given an integer of -123, it should return -321', () => {
    assert.equal(reverse(-123), -321);
  });
  // if is not a 32-bit integer
  it('given an integer of 1534236469, it should return 0', () => {
    assert.equal(reverse(1534236469), 0);
  });
})