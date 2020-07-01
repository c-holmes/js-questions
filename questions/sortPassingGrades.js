import { swap } from "../helpers.js";

/** 
 * Moves all numbers < 50 to the end of the array, 
 * without changing the order of numbers > 50
 * @params {Array} nums
 * @return {Array}
 */
function sortPassingGrades(nums) {
  const failingGradeIndexes = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 50) {
      failingGradeIndexes.push(i);
    } else {
      if (i > failingGradeIndexes[0]) {
        swap(nums,failingGradeIndexes[0],i);
        failingGradeIndexes.shift();
        failingGradeIndexes.push(i);
      }
    }
  }
  return nums;
}

function runAndLogReturn() {
  console.log(sortPassingGrades([20,30,100,33,44,200,51,50]));
}

export {runAndLogReturn as jsQuestion};