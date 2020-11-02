const assert = require('chai').assert;
const {shuffle} = require('../questions/shuffleDeck.js');
const cards = Array.from(new Array(52), (x, i) => i);

describe('shuffle', () => {
    it("given an array of [1,2,3,4,5,...,52], output should not match", () => {
        let cardsUnShuffled = Array.from(cards);
        let cardsShuffled = shuffle(Array.from(cards));
        assert.notDeepEqual(cardsShuffled, cardsUnShuffled);
    })

    it("given an array with a input length of 52, the output should remain 52", () => {
        assert.equal(shuffle(cards).length, cards.length);
    })

    it("given an array of 52 items (starting at 0), the max item should be 51", () => {
        const cardsShuffled = shuffle(Array.from(cards));
        let currentMax = 0;
        for (let i = 0; i < cardsShuffled.length; i++) {
            currentMax = Math.max(currentMax, cardsShuffled[i]);
        }
        assert.equal(currentMax, cards.length - 1);
    })

    it("given an array of 52 items (starting at 0), the max item should be 51", () => {
        const cardsShuffled = shuffle(Array.from(cards));
        let currentMin = 0;
        for (let i = 0; i < cardsShuffled.length; i++) {
            currentMin = Math.min(currentMin, cardsShuffled[i]);
        }
        assert.equal(currentMin, 0);
    })

    it("given an array with unique values, output values should all remain unique", () => {
        const shuffledDeck = shuffle(Array.from(cards));
        const numTracker = {};
        for (let i = 0; i < shuffledDeck.length; i++) {
            if (!numTracker[shuffledDeck[i]]) {
                numTracker[shuffledDeck[i]] = 1;
            }
        }

        for (let i = 0; i < shuffledDeck.length; i++) {
            assert.equal(numTracker[shuffledDeck[i]], 1);
        }
    })
})