/**
 * You are given an array with integers between 1 and 1,000,000. 
 * One integer is in the array twice. How can you determine which one? 
 * Can you think of a way to do it using little extra memory.
 * @param {Array} nums
 * @return {Array}
 */ 
function checkTwice(nums) {
  const refObj = {};
  for (let i = 0; i < nums.length; i++) {
    if (refObj[nums[i]] !== undefined) {
      return nums[i];
    } 
    refObj[nums[i]] = 1;
  }
}

exports.checkTwice = checkTwice;