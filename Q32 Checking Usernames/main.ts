// Question 32:
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// • Make a list of five or more usernames called current_users.
let currentUsers:string[] = ["Yousuf","Owais","Bilal","Ahsan","Abdullah"];

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let newUsers:string[] = ["Salman","Subhan","Yousuf","Hamdan","Abdullah"];

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. 
for (let new_user of newUsers) {

    if (
      currentUsers.some(
        (current_user) => current_user.toLowerCase() === new_user.toLowerCase()
      )
    )
      console.log("You will need to enter a new username.");

    else {
      console.log(`The username '${new_user}' is available.`);
    };
    
  };
