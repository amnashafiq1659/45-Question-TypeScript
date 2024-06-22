"use strict";
// Question 16:
// More Guests: You just found a bigger dinner table, so now more space is available.
// Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15.
// Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.• Add one new guest to the middle of your array. 
//• Use append() to add one new guest to the end of your list. 
//• Print a new set of invitation messages, one for each person in your list.
Object.defineProperty(exports, "__esModule", { value: true });
let guestList = ["Enaya", "Hareem", "Hoorab", "Barka"];
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}: \n You are invited to dinner at my home on coming Sunday.`);
}
;
console.log("\n Good News! I found a big dining table, so more space is available. So my new guests is:\n");
guestList.unshift("Maryam");
guestList.splice(1, 0, "Kulsoom");
guestList.push("Zunaisha");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}: \n You are invited to dinner at my home on coming Sunday.`);
}
;
