const assert = require('assert');
const {checkTwice} = require('../questions/duplicateIntegers.js');

describe('checkTwice', () => {
  it('in the array [20,30,100,33,44,20,50,50], 50 is shown twice', () => {
    assert.equal(checkTwice([20,30,100,33,44,20,50,55]), 20);
  });

  it('in the array [900,300,2,3,44,20,2,90], 2 is shown twice', () => {
    assert.equal(checkTwice([900,300,2,3,44,20,2,90]), 2);
  })
});






