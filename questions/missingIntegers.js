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
  // gauss formula (n * n+1)/2
  return nums.length * (nums.length + 1) / 2 - sum
}

function findMissingObjSolution(nums) {
  const obj = {}
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = nums[i];
  }
  for (let i = 1; i < nums.length; i++) {
    if (!obj[i]) {
      return i;
    }
  }
}

function runAndLogReturn() {
  console.log(findMissingObjSolution([3,2,1,4,0,6]));
}

export {runAndLogReturn as jsQuestion};

