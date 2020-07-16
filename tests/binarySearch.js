const assert = require("chai").assert;
const {binarySearch} = require("../questions/binarySearch.js");

describe('binarySearch', () => {
    it('given the array [1,2,3,4,5,6,7], when searching for 3, returned value should be 2', () => {
        assert.equal(binarySearch([1,2,3,4,5,6,7], 3), 2);
    })
});