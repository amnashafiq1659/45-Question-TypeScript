// Question 6:
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
// Make sure you use each character combination, "\t" and "\n", at least once.
// Print the name once, so the whitespace around the name is displayed. 
// Then print the name after striping the white spaces.

// Person's name with whitespaces
let personName:string ="\n\t Amna Shafiq \t\n";

console.log(personName);

// Person's name without whitespaces
let stripped:string =personName.trim();

console.log(stripped);