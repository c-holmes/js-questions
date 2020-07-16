/**
 * Implement Shuffle given an array containing a deck of cards and the number of cards. Now make it O(n).
 * input: [1,2,3,4,5,...,52]; output: [45,30,2,1,32...,31]
 * @param {Array}
 * @return {Array}
 */
function shuffle(cards) {
  for (let i = 0; i < cards.length; i++) {
    let randIndex = Math.floor(Math.random() * cards.length);
    let temp = cards[randIndex];
    cards[randIndex] = cards[i];
    cards[i] = temp;
  }
  return cards;
}

exports.shuffle = shuffle;