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

function getUserChoice() {
    const choices = ["rock", "paper", "scissors"];
    let choice = prompt("Please choose rock, paper, or scissors:").toLowerCase();
    while (choices.includes(choice) === false) {
        choice = prompt("Invalid choice. Please choose rock, paper, or scissors:").toLowerCase();
    } 
    return choice;
}


function playGame(rounds=5) {
    console.log("Welcome to Rock, Paper, Scissors!");
    console.log("You will play 5 rounds against the computer.");
    let humanScore = 0;
    let computerScore = 0;
    
    // Helper Function to capitalize the first letter of a string
    // This is used to make the output more readable
    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    // Logic to play a single round of the game
    // This function takes the user's choice and the computer's choice as arguments
    function playRound(humanChoice, computerChoice) {
        console.log("User's choice:", capitalize(humanChoice));
        console.log("Computer's choice:", capitalize(computerChoice));
        if (humanChoice === computerChoice) {
            console.log("It's a tie! Try Again!");
            playRound(getUserChoice(), getComputerChoice());
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`);
            humanScore++;
        }
        else {
            console.log(`You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`);
            computerScore++;
        }
    }

    // Loop to play multiple rounds of the game
    for (let i = 0; i < rounds; i++) {
        const humanChoice = getUserChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        if (i !== rounds - 1) {
            console.log(`Round: ${i+1} Score: You ${humanScore} - Computer ${computerScore}`);
        }
    }
    // Display the final score to the user
    console.log(`Final Score: You ${humanScore} - Computer ${computerScore}`);
}

// Call the playGame function to start the game
playGame(5);