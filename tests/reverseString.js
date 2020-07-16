const assert = require('chai').assert;
const {reverseString} = require('../questions/reverseString.js');

describe("reverseString", () => {
  it("given the string doghouse, it should return esuohgod", () => {
    assert.equal(reverseString("doghouse"), "esuohgod");
  })
});