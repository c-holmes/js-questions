/** 
 * Sum n largest integers in an array of integers where every integer is between 0 and 9
 * input: 3, [1,2,5,3,7,6,9] output: 22
 * input: 2, [1,2,5,3,7,6,9] output: 16
 * @param {Array} nums
 * @param {Number} n
 */
function getNLargestNaive(nums, n) {
  const maxes = Array.from(new Array(n), () => 0);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < maxes.length; j++) {
      if (nums[i] > maxes[j]) {
        let nextValue = nums[i];
        for (let k = j; k < maxes.length; k++) {
          let temp = maxes[k];
          maxes[k] = nextValue;
          nextValue = temp;
        }
        break;
      }
    }
  }
  return maxes.reduce((a,b) => a+b);
}

function getNLargest(nums, n) {
  const numberTracker = Array.from(new Array(10), () => 0);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    numberTracker[nums[i]] += 1;
  }
  for (let i = 9; i >= 0; i--) {
    if (numberTracker[i] > 0) {
      sum += i * numberTracker[i];
      n--;
    }
    if (n < 1) {
      break;
    }
  }
  return sum;
}

function runAndLogReturn() {
  console.log(getNLargest([1,2,5,3,7,6,9], 3));
}

export {runAndLogReturn as jsQuestion};