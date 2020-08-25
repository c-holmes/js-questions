/**
 * Given an array of integers, return indices of the two numbers
 * such that they add up to a specific target. You may assume that
 * each input would have exactly one solution, and you may not use 
 * the same element twice.
 * @param {Array} nums
 * @param {Number} target
 * @return {Array}
 */

function twoSum(nums, target) {
  let compliment;
  let prevIndex = 0;

  // TODO: increase runtime by removing indexOF
  for(let i = 1; i < nums.length; i++) {
    compliment = target - nums[prevIndex];
    if (nums[i] === compliment) {
      return [prevIndex, i];
    } else if (nums.indexOf(compliment, i + 1) !== -1) {
      return [prevIndex, nums.indexOf(compliment, i + 1)];
    } else {
      prevIndex = i;
    }
  }
} 

exports.twoSum = twoSum;