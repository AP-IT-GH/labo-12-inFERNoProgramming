"use strict"

let email = "sven.maes@ap.be"
let endIndex = email.indexOf("@");
let nameFromEmail = (((email.substring(0, endIndex)).replace(".", " ")).toUpperCase());
console.log(`De eigenaar van het emailadres ${email} is ${nameFromEmail}.`);