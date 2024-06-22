// Question 43:
// Unchanged Magicians: Start with your work from Exercise 40.
// Call the function make_great() with a copy of the array of magicians’ names.
// Because the original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magicians:string[] = ["Cris Angel","Teller","Dynamo","Ricky Jay","Shin Lim"];

function showMagicians (magicians:string[]){

    for(let i=0; i<magicians.length; i++){

        console.log(magicians[i]);

    };

};

function makeGreat (magicians:string[]){

    let greatMagicians: string[] = [];

    for(let i=0; i<magicians.length; i++){

        greatMagicians.push("The great " + magicians[i]);

    };

    return greatMagicians;
    
};

let greatMagicians: string[] = makeGreat(magicians);

showMagicians(magicians);

showMagicians(greatMagicians);