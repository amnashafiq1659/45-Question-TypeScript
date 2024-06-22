"use strict";
// Question 3:
// Name Cases: Store a persons's name in a variable, and then print that person's name in lowercase, uppercase and titlecase. 
Object.defineProperty(exports, "__esModule", { value: true });
let personName = "Amna Shafiq";
//Person's name in Lowercase:
console.log(`Name in lowercase: ${personName.toLowerCase()}`);
//Person's name in uppercase:
console.log(`Name in uppercase: ${personName.toUpperCase()}`);
//Person's name in titlecase:
let step1 = personName.split(" ");
let step2 = step1.map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
let step3 = step2.join(" ");
console.log(`Name in titlecase: ${step3}`);
