// Question 21:
// They think of something you could store in a TypeScript Object.
// Write a program that creates Objects containing these items.

interface Car {

    brand: string;
    model: string;
    variant: string;
    year: number;
    color: string;

}

let myCar : Car = {

    brand: "Toyota",
    model: "Corolla",
    variant: "1800cc",
    year: 2022,
    color: "black",

};

console.log(myCar);