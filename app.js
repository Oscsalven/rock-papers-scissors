/* List with rock, paper and scissors */
let gameOptions = ["rock", "paper", "scissors"];

/* This function will have the computer choose */
function computerPlay() {
    /* Create a random number between 0 and 2. */
    let pick = Math.floor(Math.random() * 3); /* This represents the index of the computer's weapon */
    let computerPick = gameOptions[pick];
    return computerPick;
}

/* Play a single round */
function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "paper") {
                console.log("You Lose. Paper beats rock.");
            } else if (computerSelection === "scissors") {
                console.log("You Win!");
            } else if (playerSelection === computerSelection) {
                console.log("It's a tie.");
            }
            break;

        case "paper":
            if (computerSelection === "scissors") {
                console.log("You Lose. Scissors beat paper.");
            } else if (computerSelection === "rock") {
                console.log("You Win!");
            } else if (playerSelection === computerSelection) {
                console.log("It's a tie.");
            }
            break;

        case "scissors":
            if (computerSelection === "rock") {
                console.log("You Lose. Rock beats scissors");
            } else if (computerSelection === "paper") {
                console.log("You Win!");
            } else if (playerSelection === computerSelection) {
                console.log("It's a tie.");
            }
            break;
    }
}

/* This is the game's main function */
function game() {
    /* This will keep track of the rounds played */
    let round = 1;

    /* This while loop will keep the game running for five rounds */
    while (round <= 5) {
        /* The user chooses a weapon */
        let playerSelection = prompt("Please choose your weapon: ").toLowerCase();

        /* The computer chooses a weapon */
         let computerSelection = computerPlay();

         /* This two were used for testing the game */
        /*  console.log(playerSelection);
         console.log(computerSelection); */
        
        /* This starts a round */
        console.log(playRound(playerSelection, computerSelection));
        round ++;
    }
}

game();