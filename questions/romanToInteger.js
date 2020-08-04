/**
 * Roman to Integer
 * Given a roman numeral, convert it to an integer. 
 * Input is guaranteed to be within the range from 1 to 3999.
 * https://leetcode.com/problems/roman-to-integer/
 * @param {String} rnum
 */
function romanToInteger(rnum) {
  const romanToInteger = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  let sum = 0;
  for (let i = 0; i < rnum.length; i++) {
    let currentVal = romanToInteger[rnum.charAt(i)];
    let nextVal = romanToInteger[rnum.charAt(i + 1)];
    if (nextVal) {
      if (currentVal >= nextVal) {
        sum += currentVal;
      } else {
        sum += (nextVal - currentVal);
        i++;
      }
    } else {
      sum += currentVal;
    }
  }
  return sum;
}

exports.romanToInteger = romanToInteger;