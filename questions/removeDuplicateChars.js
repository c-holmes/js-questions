/**
 * Remove duplicate chars from a string
 * input: "AAA BBB" // output "A B"
 * @param {String} string
 * @return {String}
 */
 
function RemoveDuplicateChars(string) {
  const stringArr = string.split('');
  let prevValue = '';
  let uniqueOutput = '';
  for (let i = 0; i < stringArr.length; i++) {
    if (stringArr[i] !== prevValue) {
      uniqueOutput += stringArr[i];
    }
    prevValue = stringArr[i];
  }

  return uniqueOutput;
}

function runAndLogReturn() {
  console.log(RemoveDuplicateChars("AAA  BBB"));
}

export {runAndLogReturn as jsQuestion};