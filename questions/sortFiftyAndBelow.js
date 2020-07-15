/**
 * Move all numbers < 50 to the end of the array, 
 * without changing the order of numbers > 50
 * @param {Array} nums
 * @return {Array}
 */
function sortFiftyAndBelow(nums) {
  let below50Tracker = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 50) {
      below50Tracker.push(i);
    } else if (i > below50Tracker[0]) {
      let temp = nums[i];
      nums[i] = nums[below50Tracker[0]];
      nums[below50Tracker[0]] = temp;
      below50Tracker.shift();
      below50Tracker.push(i);
    }
  }
  return nums;
}

exports.sortFiftyAndBelow = sortFiftyAndBelow;