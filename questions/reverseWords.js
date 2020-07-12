/**
 * Reverse words in a string (words are separated by one or more spaces). Now do it in-place.
 * input: the dog  jumped // output: jumped dog the
 * @param {String}
 * @param {String}
 */
function reverseWords(sentance) {
  let reversedSentance = '';
  sentance = sentance.replace(/  +/g, ' ');
  const sentanceArr = sentance.split(' ');

  for (let i = sentanceArr.length - 1; i >= 0 ; i--) {
    const space = (i !== sentanceArr.length - 1) ? ' ' : ''; 
    reversedSentance = reversedSentance + space + sentanceArr[i];
  }

  return reversedSentance;
}

function runAndLogReturn() {
  console.log(reverseWords("jumped dog the"));
}

export {runAndLogReturn as jsQuestion};