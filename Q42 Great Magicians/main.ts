// Question 42:
// Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.

let magicians:string[] = ["Cris Angel","Teller","Dynamo","Ricky Jay","Shin Lim"];

function showMagicians (magicians:string[]){

    for(let i=0; i<magicians.length; i++){

        console.log(magicians[i]);

    };

};

function makeGreat (magicians:string[]){

    for(let i=0; i<magicians.length; i++){

        magicians[i] = "The great " + magicians[i];

    };
    
};

makeGreat(magicians);

showMagicians(magicians);