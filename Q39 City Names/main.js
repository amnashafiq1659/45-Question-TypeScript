"use strict";
// Question 39:
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
Object.defineProperty(exports, "__esModule", { value: true });
function cityCountry(city, country) {
    return `"${city}, ${country}".`;
}
;
let function1 = cityCountry("Islamabad", "Pakistan");
console.log(function1);
let function2 = cityCountry("Riyadh", "Saudia Arabia");
console.log(function2);
let function3 = cityCountry("Istanbul", "Turkey");
console.log(function3);
