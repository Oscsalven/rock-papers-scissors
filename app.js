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

/* This will store the player's selection */
let playerSelection = prompt("Please choose your weapon: ").toLowerCase();

/* Play a single round */
function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "paper") {
                console.log("You Lose. Paper beats rock.");
            } else if (computerSelection === "scissors") {
                console.log("You Win!");
            }
            break;

        case "paper":
            if (computerSelection === "scissors") {
                console.log("You Lose. Scissors beat paper.");
            } else if (computerSelection === "rock") {
                console.log("You Win!");
            }
            break;

        case "scissors":
            if (computerSelection === "rock") {
                console.log("You Lose. Rock beats scissors");
            } else if (computerSelection === "paper") {
                console.log("You Win!");
            }
            break;

        default:
            console.log("It's a tie.");
            break;
    }
}

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection)); /* Test for playRound */