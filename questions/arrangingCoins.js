/**
 * You have a total of n coins that you want to form in a staircase shape, 
 * where every k-th row must have exactly k coins. Given n, find the total number 
 * of full staircase rows that can be formed. n is a non-negative integer and fits
 * within the range of a 32-bit signed integer.
 * @param {Number} n
 * @return {Number}
 */
function arrangingCoins(n) {
  let counter = 0;
  while (n > 0) {
    n -= counter;
    if (n > counter) {
      counter++;
    }
  }
  return counter;
}

exports.arrangingCoins = arrangingCoins;