"use strict";
// Question 17:
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16.
// Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list.
// Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list.
// Print your list to make sure you actually have an empty list at the end of your program.
Object.defineProperty(exports, "__esModule", { value: true });
let guestList = ["Enaya", "Hareem", "Hoorab", "Barka"];
console.log("\n Good News! I found a big dining table, so more space is available. So my new guests is:\n");
guestList.unshift("Maryam");
guestList.splice(1, 0, "Kulsoom");
guestList.push("Zunaisha");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}: \n You are invited to dinner at my home on coming Sunday.`);
}
;
console.log("\nUnfortunately, the new table won't arrive in time, so I can only invite two people for dinner.\n");
while (guestList.length > 2) {
    let notInvited = guestList.pop();
    console.log(`Sorry, due to limited space I can't invite you at dinner ${notInvited}\n`);
}
;
for (let i = 0; i < guestList.length; i++) {
    console.log(`\n Dear ${guestList[i]}: \n You are still invited at dinner.`);
}
;
guestList.pop();
guestList.pop();
console.log(guestList);
