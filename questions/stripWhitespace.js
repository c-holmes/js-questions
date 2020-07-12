/**
 * Strip whitespace from a string in-place
 * input: dog   ho us     e   // output: doghouse
 * @param {String}
 * @return {String}
 */
function stripWhitespace(string) {
  return string.replace(/\s/g, '');
}

function runAndLogReturn() {
  console.log(stripWhitespace(" dog   ho us      e   "));
}

export {runAndLogReturn as jsQuestion};