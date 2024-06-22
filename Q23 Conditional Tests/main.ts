// Question 23:
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test.
// Your code should look something like this:let car = 'subaru';console.log("Is car == 'subaru'? I predict True.")console.log(car == 'subaru')
//• Look closely at your results, and make sure you understand why each line evaluates to True or False.
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let car:string = "Corolla"

// Test 1
console.log("Is car == 'Corolla'? I predict true.");
console.log(car==="Corolla");

// Test 2
console.log("Is car != 'Civic'? I predict true.");
console.log(car!=="Civic");

// Test 3
console.log("Is !(car == 'Mehran')? I predict true.");
console.log(!(car==="Mehran"));

// Test 4
console.log("Is the length of the car > 2? I predict true.");
console.log(car.length>2);

// Test 5
console.log("Is the length of the car <= 7? I predict true.");
console.log(car.length<=7);

// Test 6
console.log("Is car == 'Civic'? I predict false.");
console.log(car==="Civic");

// Test 7
console.log("Is car != 'Corolla'? I predict false.");
console.log(car!=="Corolla");

// Test 8
console.log("Is !(car == 'Corolla')? I predict false.");
console.log(!(car==="Corolla"));

// Test 9
console.log("Is car in uppercase? I predict false");
console.log(car.toUpperCase() === car);

// Test 10
console.log("Is car in lowercase? I predict false");
console.log(car.toLowerCase() === car);
