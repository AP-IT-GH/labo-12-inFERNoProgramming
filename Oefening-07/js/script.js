"use strict"

let currentCapital = 100000;
let timePeriod = 7;
let interest = 0.02;

let finalCapital = (currentCapital * (1 + interest)**timePeriod).toFixed(0);

console.log(`Op een periode van ${timePeriod} jaar stijgt je bezit van ${currentCapital} naar ${finalCapital}.`);
console.log(`Dit met een rentevoet van ${interest}`);