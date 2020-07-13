/**
 * Return the sum two largest integers in an array
 * @param {Array}
 * @return {Number}
 */
function twoLargest(nums) {
  let max = 0;
  let prevMax = 0;

  for (let i = 0; i < nums.length; i++) {
    if(nums[i] > max) {
      prevMax = max;
      max = nums[i];
    } else if(nums[i] > prevMax) {
      prevMax = nums[i];
    }
  }
  
  return max + prevMax;
}

exports.twoLargest = twoLargest;