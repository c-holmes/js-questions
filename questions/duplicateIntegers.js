/**
 * You are given an array with integers between 1 and 1,000,000. 
 * One integer is in the array twice. How can you determine which one? 
 * Can you think of a way to do it using little extra memory.
 * @param {Array} nums
 * @return {Array}
 */ 
function checkTwice(nums) {
  const numTracker = {};
  const result = [];

  for(let i = 0; i < nums.length; i++) {
    if (numTracker[nums[i]] !== undefined) {
      numTracker[nums[i]] += 1;
    } else {
      numTracker[nums[i]] = 1;
    }
  }

  for(const prop in numTracker) {
    if (numTracker[prop] >= 2) {
      result.push(prop);
    }
  }

  return result;
}

function runAndLogReturn() {
  console.log(checkTwice([20,30,100,33,44,20,50,50]));
}

export {runAndLogReturn as jsQuestion};