const assert = require('chai').assert;
const {reverseWords} = require('../questions/reverseWords.js');

describe("reverseWords", () => {
  it("given the string 'jumped dog brown the', it should return 'the brown dog jumped'", () => {
    assert.equal(reverseWords("jumped dog brown the"), "the brown dog jumped");
  })
});