"use strict"

let firstNameLong = "sven";
let firstNameShort = (firstNameLong.substring(0,1)).toUpperCase();

let lastNameLong = "maes";
let lastNameShort = lastNameLong.replace(lastNameLong.substring(0,1), lastNameLong.substring(0,1).toUpperCase());

console.log(`De naam "${firstNameLong} ${lastNameLong}" zal worden afgekort als "${firstNameShort}. ${lastNameShort}"`)