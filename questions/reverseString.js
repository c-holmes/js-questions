/**
 * Reverse a string
 * input: doghouse // output:esuohgod
 * @param {String}
 * @return {String}
 */
function reverseString(string) {
  return string.split("").reverse().join("");
}

exports.reverseString = reverseString;