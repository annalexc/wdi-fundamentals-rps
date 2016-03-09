////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.  
    while (!(move === "rock" || move === "paper" || move === "scissors")) {
        // check until 'move' equals "rock", "paper", or "scissors"
        //console.log(move,"is an invalid input value.")
        move = getInput();
    } 
    console.log("Player played", move);
    return move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if (move === "rock" || move === "paper" || move === "scissors") {
        console.log("Computer played", move);
        return move; 
    } else { // If 'move' has a value other than "rock", "paper", or "scissors"
        move = randomPlay();
        console.log("Computer played", move);
        return move;
    }
    
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === computerMove) {
        winner = "tie";
    } else if (playerMove === "rock" && computerMove === "scissors") {
        winner = "player";
    } else if (playerMove === "paper" && computerMove === "rock") {
        winner = "player";
    } else if (playerMove === "scissors" && computerMove === "paper") {
        winner = "player";
    } else {
        winner = "computer";
    }
    //console.log ("WINNER:", winner);
    return winner;
    
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors!");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    var winner;
    var round = 1; // For console logs
    
    while (playerWins < 2 && computerWins < 2) {
        console.log("");
        console.log("**************");
        console.log("Round Number", round);
        console.log("**************");
        console.log("");
        winner = getWinner(getPlayerMove(),getComputerMove());
        console.log("");
        console.log("WINNER of Round", round, ":", winner);
        if (winner === "player") {
            playerWins++;
        } else if (winner === "computer") {
            computerWins++;
        } else {
        }
        round++;
    }
    return [playerWins, computerWins];
}