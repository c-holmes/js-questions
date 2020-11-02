/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  // check if 0 return 0
  if (x === 0) {
    return 0;
  }

  // create an array by splitting the number up
  const nums = x.toString().split('').reverse();

  // run through array and remove 0's
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
    }
  }

  // get number
  const reverseOutput = parseInt(nums.join(''), 10)

  // Use a number constant instead of calculating the power
  if (reverseOutput > 0x7FFFFFFF) {
    return 0;
  }

  // apply negative value if needed
  return x < 0 ? -reverseOutput : reverseOutput;
};

var reverseOptimized = function(x) {
  if (x === 0) {
    return 0;
  }

  const reverseNum = +String(Math.abs(x)).split('').reverse().join('');

  if (reverseNum > 0x7FFFFFFF) {
    return 0;
  }

  return x < 0 ? -reverseNum : reverseNum;
};

exports.reverse = reverseOptimized;