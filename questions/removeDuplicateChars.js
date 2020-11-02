/**
 * Remove duplicate chars from a string
 * @param {String} string
 * @return {String}
 */
 
function removeDuplicateChars(string) {
  const stringArr = string.replace(/  +/g, ' ').split('');
  let prevValue = '';
  let uniqueChars = '';

  for(let i = 0; i < stringArr.length; i++) {
    if (stringArr[i] !== prevValue) {
      uniqueChars += stringArr[i];
    }
    prevValue = stringArr[i];
  }
  return uniqueChars;
}

exports.removeDuplicateChars = removeDuplicateChars;