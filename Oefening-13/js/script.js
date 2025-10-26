"use strict"

let givenText = "Dit is een stuk tekst dat langer kan worden."
let dash = "-";
let amountOfDashes = givenText.length;

console.log(`/${dash.repeat(amountOfDashes + 2)}\\ \n| ${givenText} |\n/${dash.repeat(amountOfDashes +2 )}\\`);