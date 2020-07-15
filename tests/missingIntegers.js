const assert = require('chai').assert;
const {findMissingObjSolution} = require("../questions/missingIntegers.js");

describe('findMissingObjSolution', () => {
    it('given the array [3,2,1,4,0,6], it should return 5', () => {
        assert.equal(findMissingObjSolution([3,2,1,4,0,6]), 5);
    })
})