/**
 * Reverse words in a string (words are separated by one or more spaces). Now do it in-place.
 * input: the dog  jumped // output: jumped dog the
 * @param {String}
 * @param {String}
 */
function reverseWords(sentance) {
  return sentance.replace(/  +/g, ' ').split(' ').reverse().join(' ');
}

exports.reverseWords = reverseWords;