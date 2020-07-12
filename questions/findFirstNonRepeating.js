/**
 * Find the first non-repeating character in a string
 * input "ABCA" // output "B"
 * @param {String} string
 * @return {String}
 */

function FindFirstUniqueChar(string) {
  const stringArr = string.split('');
  const charCounter = {};

  for (let i = 0; i < stringArr.length; i++) {
    if (charCounter[stringArr[i]]) {
      charCounter[stringArr[i]] += 1;
    } else {
      charCounter[stringArr[i]] = 1;
    }
  }

  for (let i = 0; i < stringArr.length; i++) {
    if (charCounter[stringArr[i]] < 2) {
      return stringArr[i];
    }
  }
  return "there are no unique chars";
}

function runAndLogReturn() {
  console.log(FindFirstUniqueChar("ABCA"));
}

export {runAndLogReturn as jsQuestion};