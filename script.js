// Test Script File Works
console.log("Hello, World!");

// Sudo Code
// 1. Create a function to get the computer's choice
//     a. Select one of the three options randomly: rock, paper, or scissors
// 2. Create a function to get the user's choice
//     a. Prompt the user to enter their choice
//     b. Force the players choice to lowercase to make the results case-insensitive
//     c. Validate the user's input to ensure it's one of the three options
// 3. Set variables to keep track of the score
//     a. Set the initial score to 0 for both the player and the computer
// 4. Create a function to play a single round of the game
//     a. Compare the user's choice to the computer's choice
//     b. Determine the winner based on the rules of rock-paper-scissors
//     c. Update the score accordingly
//     d. Display the result of the round to the user
// 5. Create a function to play multiple rounds of the game
//     a. Allow the user to play 5 rounds
//     b. Keep track of the score after each round
//     c. Display the final score to the user
// 6. Create a function to reset the game
//     a. Reset the score to 0 for both the player and the computer
//     b. Allow the user to play again or exit the game

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
    // Optional method without arrays and commented out
    // const randomNum = Math.floor(random() * 3);
    // if (randomNum === 0) {
    //     return "rock";
    // } else if (randomNum === 1) {
    //     return "paper";
    // } else {
    //     return "scissors";
    // }
}

// Test getComputerChoice function
console.log("Computer's choice:", getComputerChoice());

