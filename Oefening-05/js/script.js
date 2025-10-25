"use strict"

let weightPerson1 = 60;
let heightPerson1 = 1.70;
let namePerson1 = "Mo Deprez";

let weightPerson2 = 70;
let heightPerson2 = 1.50;
let namePerson2 = "John Doe";

let bmiPerson1 = weightPerson1 / (heightPerson1 ** 2);
let bmiPerson2 = weightPerson2 / (heightPerson2 ** 2);

console.log(`BMI van ${namePerson1} is ${bmiPerson1} `);
console.log(`BMI van ${namePerson2} is ${bmiPerson2} `);