// Question 27:
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
//• If the alien is yellow, print a message that the player earned 10 points.
//• If the alien is red, print a message that the player earned 15 points.
//• Write three versions of this program, making sure each message is printed for the appropriate color alien.

// 1st version
let alienColor:string = "Green";

if(alienColor === "Green"){

    console.log("Congratulations! You earned 5 points.");

}

else if(alienColor === "Yellow"){

    console.log("Congratulations! You earned 10 points.");

}

else if(alienColor === "Red"){

    console.log("Congratulations! You earned 15 points.");

};

// 2nd version
alienColor = "Yellow";

if(alienColor === "Green"){

    console.log("Congratulations! You earned 5 points.");

}

else if(alienColor === "Yellow"){

    console.log("Congratulations! You earned 10 points.");

}

else if(alienColor === "Red"){

    console.log("Congratulations! You earned 15 points.")

};

// 3rd version:
alienColor = "Red";

if(alienColor === "Green"){

    console.log("Congratulations! You earned 5 points.");

}

else if(alienColor === "Yellow"){

    console.log("Congratulations! You earned 10 points.");

}

else if(alienColor === "Red"){

    console.log("Congratulations! You earned 15 points.")

};