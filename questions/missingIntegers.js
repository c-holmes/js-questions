/**
 * You are given an array with integers between 1 and 1,000,000. 
 * One integer is missing. How can you determine which one? 
 * Can you think of a way to do it while iterating through the array only once. 
 * Is overflow a problem in the solution? Why not?
 * @param {Array}
 * @return {Number}
 */
function findMissingGaussSolution(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return (nums.length * (nums.length + 1)) / 2 - sum;
}

function findMissingObjSolution(nums) {
  const numTracker = {};

  for (let i = 0; i < nums.length; i++) {
    numTracker[nums[i]] = 1;
  }
  for (let i = 1; i <= nums.length; i++) {
    if (!numTracker[i]) {
      return i;
    }
  }
}

exports.findMissingObjSolution = findMissingObjSolution;

