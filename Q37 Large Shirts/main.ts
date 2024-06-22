// Question 37:
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function makeShirt ( size:string = "Large", text:string = "I love Typescript"){

    console.log(`The size of the shirt is "${size}" and the text printed on the shirt is "${text}".`);

};

makeShirt();

makeShirt("Medium");

makeShirt("Small","I love Python");