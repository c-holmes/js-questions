import {jsQuestion} from './questions/arrangingCoins.js';
let start = process.hrtime();

jsQuestion();

let diff = process.hrtime(start);
console.log(`Operation took ${diff[0] * 1e9 + diff[1]} nanoseconds`);