/** 
 * Sum n largest integers in an array of integers where every integer is between 0 and 9
 * @param {Array} nums
 * @param {Number} n
 */
function getNLargest(nums, n) {
  let sum = 0;
  let intTracker = Array.from(new Array(10), () => 0);

  for (let i = 0; i < nums.length; i++) {
    if (intTracker[nums[i]]){
      intTracker[nums[i]] += 1;
    } else {
      intTracker[nums[i]] = 1;
    }
  }

  for (let i = 9; i > 0; i--){
    if (intTracker[i]) {
      if (intTracker[i] > n) {
        sum += n * intTracker[i];
        break;
      } else {
        sum += i * intTracker[i];
        n -= intTracker[i];
      }
    }
    if (n < 1) {
      break;
    }
  }

  return sum;
}

exports.getNLargest = getNLargest;