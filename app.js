const comChoice = ["ROCK", "PAPPER", "SCISSORS"];
const winners = [];

function getComputerChoice() {
  return comChoice[Math.floor(Math.random() * comChoice.length)];
}
function declareWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return "TIE";
  } else if (
    (choiceP === "SCISSORS" && choiceC === "PAPPER") ||
    (choiceP === "ROCK" && choiceC === "SCISSORS") ||
    (choiceP === "PAPPER" && choiceC === "ROCK")
  ) {
    return "PLAYER";
  } else {
    return "COMPUTER";
  }
}
function playerSelection() {
  let input = prompt("Kindly choose between ROCK,PAPER and SCISSORS");
  while (input == null) {
    input = prompt("Kindly choose between ROCK,PAPER and SCISSORS");
  }
  input = input.toUpperCase();
  return input;
}

function playRound() {
  const playerPlay = playerSelection();
  const computerSelection = getComputerChoice();
  const winner = declareWinner(playerPlay, computerSelection);
  winners.push(winner);
  logWinner(playerPlay, computerSelection, winner);
}

function logWinner(playerSelection, computerSelection, winner) {
  console.log("PLAYER CHOSE: ", playerSelection);
  console.log("COMPUTER CHOSE: ", computerSelection);
  if (winner === "TIE") {
    console.log("ITS A TIE!");
  } else {
    console.log(winner, "WINS THIS ROUND");
  }
  console.log("...............................");
}
function finalResult() {
  let playerResult = winners.filter((item) => item === "PLAYER").length;
  let computerResult = winners.filter((item) => item === "COMPUTER").length;
  let tieResult = winners.filter((item) => item === "TIE").length;
  console.log("PLAYER WIN: ", playerResult);
  console.log("COMPUTER WINS: ", computerResult);
  console.log("TIE: ", tieResult);
}

function game() {
  for (let i = 1; i <= 5; i++) {
    playRound(i);
  }
  finalResult();
}
game();
