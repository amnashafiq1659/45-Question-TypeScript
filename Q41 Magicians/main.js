"use strict";
// Question 41:
// Magicians: Make a array of magician’s names.
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ["Cris Angel", "Teller", "Dynamo", "Ricky Jay", "Shin Lim"];
function showMagicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
    ;
}
;
showMagicians(magicians);
