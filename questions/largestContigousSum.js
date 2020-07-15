/**
 * Returns the largest sum of contiguous integers in the array
 * Example input: [-10, 2, 3, -2, 0, 5, -15] // output: 8
 */
function getLargestContigousSum(nums) {
  let currContiguousSum = nums[0];
  let maxContiguousSum = nums[0];

  for(let i = 1; i < nums.length; i++) {
    currContiguousSum = Math.max(currContiguousSum + nums[i], nums[i]);
    maxContiguousSum = Math.max(currContiguousSum, maxContiguousSum);
  }
  return maxContiguousSum;
}

exports.getLargestContigousSum = getLargestContigousSum;