/**
 * Reverse a string
 * input: doghouse // output:esuohgod
 * @param {String}
 * @return {String}
 */
function reverseString(string) {
  let reverseString = '';
  const stringArr = string.split('');
  for(let i = stringArr.length - 1; i >= 0; i--) {
    reverseString += stringArr[i];
  }
  return reverseString;
}

function runAndLogReturn() {
  console.log(reverseString("doghouse"));
}

export {runAndLogReturn as jsQuestion};