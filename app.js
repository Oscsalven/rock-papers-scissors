/* List with rock, paper and scissors */
let gameOptions = ["rock", "paper", "scissors"];

/* Pick a random number between 0 and 2 */
let pick = Math.floor(Math.random() * 3); /* This will be gameOptions index */

/* This function will have the computer choose */
function computerPlay() {
    let computerPick = gameOptions[pick];
    return computerPick;
}

/* The computer selection will be stored here */
let computerSelection = computerPlay();

/* This function will ask the player to pick an option */

/* This will store the player's selection */
let playerSelection = "rock";

/* Play a single round */
function playRound(playerSelection, computerSelection) {
    if (computerSelection === "paper") {
        console.log("You lose.");
    } else if (computerSelection === "scissors") {
        console.log("You win.");
    } else if (computerSelection == playerSelection) {
        console.log("Tie");
    }
}

console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection)); /* Test for playRound */