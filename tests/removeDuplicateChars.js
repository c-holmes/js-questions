const assert = require('chai').assert;
const {removeDuplicateChars} = require('../questions/removeDuplicateChars.js');

describe('removeDuplicateChars', () => {
    it('given the string AAA BB, it should output A B', () => {
        assert.equal(removeDuplicateChars("AAA  BBB"), "A B");
    })

    it('given the string AAA      BBB, it should output A B', () => {
        assert.equal(removeDuplicateChars("AAA      BBB"), "A B");
    })
})