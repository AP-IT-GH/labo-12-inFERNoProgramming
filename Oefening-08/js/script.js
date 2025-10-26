"use strict"

let currentTime = 14;
let addedTime = 33;

let finalTime = (currentTime + addedTime) % 24;
console.log(`Het is nu ${currentTime} uur.`);
console.log(`over ${addedTime} uur is het ${finalTime} uur.`)