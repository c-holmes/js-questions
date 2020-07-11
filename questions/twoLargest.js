/**
 * Return the sum two largest integers in an array
 * input: [2, 4, 3, 2] output: 7
 * input: [12, 34, 10, 6, 40] output: 74
 * @param {Array}
 * @return {Number}
 */
function twoLargest(nums) {
  let max = 0;
  let prevMax = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      prevMax = max;
      max = nums[i];
    } else if (nums[i] > prevMax) {
      prevMax = nums[i];
    }
  }
  return prevMax + max;
}

function runAndLogReturn() {
  console.log(twoLargest([12, 34, 10, 6, 40]));
}

export {runAndLogReturn as jsQuestion};