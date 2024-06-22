"use strict";
// Question 24:
// More Conditional Tests: You don’t have to limit the number of tests you create to 10.
// If you want to try more comparisons, write more tests.
// Have at least one True and one False result for each of the following:
Object.defineProperty(exports, "__esModule", { value: true });
let name1 = "Amna";
let name2 = "Shafiq";
let num1 = 15;
let num2 = 16;
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// • Tests for equality and inequality with strings
console.log("Tests for equality and inequality with strings");
console.log(name1 === "Amna");
console.log(name1 === name2);
// • Tests using the lower case function
console.log("\nTests using the lower case function");
console.log(name1.toLowerCase() === "amna");
console.log(name2.toLowerCase() === name2);
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("\nNumerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to");
console.log(num1 === 15);
console.log(num2 !== 16);
console.log(num1 < num2);
console.log(num1 > num2);
console.log(num1 <= 20);
console.log(num2 >= 35);
// • Tests using "and" and "or" operators
console.log("\nTests using and and or operators");
console.log((num1 < 20) && (num2 > 10));
console.log((num1 < 10) || (num2 > 20));
// • Test whether an item is in a array
console.log("\nTest whether an item is in a array");
console.log(array.includes(5));
console.log(array.includes(0));
// • Test whether an item is not in a array
console.log("\nTest whether an item is not in a array");
console.log(!array.includes(0));
console.log(!array.includes(4));
