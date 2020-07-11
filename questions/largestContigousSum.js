/**
 * Returns the largest sum of contiguous integers in the array
 * Example input: [-10, 2, 3, -2, 0, 5, -15] // output: 8
 */
function getLargestContigousSumNaive(nums) {
  let max = 0;
  // loop through array, get sum of adding left value to a right value, and record a max value
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum > max) {
        max = sum;
      }
    }
  }

  return max;
}

function getLargestContigousSumLinear(nums) {
  let maxSoFar = nums[0];
  let maxEndingHere = nums[0];
  for (let i = 1; i < nums.length; i++) {
    maxEndingHere = Math.max(maxEndingHere + nums[i], nums[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar
}

function runAndLogReturn() {
  console.log(getLargestContigousSumLinear([-10, 2, 3, -2, 0, 5, -15]));
}

export {runAndLogReturn as jsQuestion};