/**
 * Find the first non-repeating character in a string
 * input "ABCA" // output "B"
 * @param {String} string
 * @return {String}
 */

function FindFirstUniqueChar(string) {
  const refObj = {};
  const stringArr = string.split("");
  
  for (let i = 0; i < stringArr.length; i++) {
    if (refObj[stringArr[i]] !== undefined) {
      refObj[stringArr[i]] += 1;
    } else {
      refObj[stringArr[i]] = 1;
    }
  }
  for (let i = 0; i < stringArr.length; i++) {
    if (refObj[stringArr[i]] === 1) {
      return stringArr[i];
    } 
  }
}

exports.FindFirstUniqueChar = FindFirstUniqueChar;