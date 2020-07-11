/**
 * Implement Shuffle given an array containing a deck of cards and the number of cards. Now make it O(n).
 * input: [1,2,3,4,5,...,52]; output: [45,30,2,1,32...,31]
 * @param {Array}
 * @return {Array}
 */
function shuffle(cards) {
  for (let i = 0; i < cards.length; i++) {
    const rand = Math.floor(Math.random() * i);
    const temp = cards[i];
    cards[i] = cards[rand];
    cards[rand] = temp;
  }
  return cards;
}

const cards = Array.from(new Array(52), (x,i) => i);
function runAndLogReturn() {
  console.log(shuffle(cards));
}

export {runAndLogReturn as jsQuestion};