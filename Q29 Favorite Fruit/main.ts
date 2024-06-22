// Question 29:
// Favorite Fruit: Make a array of your favorite fruits,
// and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array.
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favoriteFruit:string[] = ["Mango","Orange","Cherry"];

if(favoriteFruit.includes("Mango")){
    console.log("You really like mango!");
};

if(favoriteFruit.includes("Orange")){
    console.log("You really like orange!");
};

if(favoriteFruit.includes("Cherry")){
    console.log("You really like cherry!");
};

if(favoriteFruit.includes("Banana")){
    console.log("You really don't like banana!");
};

if(favoriteFruit.includes("Guava")){
    console.log("You really don't like guava!");
};

if(favoriteFruit.includes("Papaya")){
    console.log("You really don't like papaya!");
};