"use strict";
// Question 45:
// Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name.
// It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
// Print the Object that’s returned to make sure all the information was stored correctly.
Object.defineProperty(exports, "__esModule", { value: true });
function carFeatures(manufacturer, model, ...features) {
    let mycar = {
        manufacturer,
        model,
    };
    for (let moreFeatures of features) {
        mycar[moreFeatures[0]] = moreFeatures[1];
    }
    return mycar;
}
;
let featuresOfCar = carFeatures("Toyota", "Corolla", ["year", 2022], ["color", "Midnight Black metallic"], ["engine", "1800 cc"]);
console.log(featuresOfCar);
