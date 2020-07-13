const assert = require('assert');
const {findFirstUniqueChar} = require('../questions/findFirstNonRepeating.js');

describe('findFirstUniqueChar', () => {
  it('The first non-repeating character in ABCA, is B', () => {
    assert.equal(findFirstUniqueChar('ABCA'), 'B');
  });
});