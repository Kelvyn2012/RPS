const playGame = document.querySelector(".playRound");
const games = document.querySelectorAll(".game");
const com = document.querySelector(".com");
const play = document.querySelector(".play");
const draw = document.querySelector(".draw");
const roundWin = document.querySelector(".roundWin");
const comFinal = document.querySelector(".comFinal");
const playFinal = document.querySelector(".playFinal");
const tieFinal = document.querySelector(".tieFinal");
const resets = document.querySelector(".resets");
const finalRes = document.querySelector(".finalRes");
const btns = document.querySelectorAll(".btns");

const comChoice = ["ROCK", "PAPER", "SCISSORS"];
let winners = [];
let playCount = 0;

function getComputerChoice() {
  return comChoice[Math.floor(Math.random() * comChoice.length)];
}
function playRound(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return "TIE";
  } else if (
    (choiceP === "SCISSORS" && choiceC === "PAPER") ||
    (choiceP === "ROCK" && choiceC === "SCISSORS") ||
    (choiceP === "PAPER" && choiceC === "ROCK")
  ) {
    return "PLAYER";
  } else {
    return "COMPUTER";
  }
}

function gameStart(playerSelection) {
  const playerPlay = playerSelection.toUpperCase();
  const computerSelection = getComputerChoice();
  const winner = playRound(playerPlay, computerSelection);
  winners.push(winner);
  logWinner(playerPlay, computerSelection, winner);
}

function logWinner(playerPlay, computerSelection, winner) {
  play.textContent = `PLAYER CHOSE: ${playerPlay}`;
  com.textContent = `COMPUTER CHOSE: ${computerSelection}`;
  console.log("PLAYER CHOSE: ", playerPlay);
  console.log("COMPUTER CHOSE: ", computerSelection);
  if (winner === "TIE") {
    roundWin.textContent = "ITS A TIE";
  } else {
    roundWin.textContent = `${winner} WINS THIS ROUND`;
  }
  console.log("...............................");
}
function finalResult() {
  let playerResult = winners.filter((item) => item === "PLAYER").length;
  let computerResult = winners.filter((item) => item === "COMPUTER").length;
  let tieResult = winners.filter((item) => item === "TIE").length;
  console.log(winners);
  playFinal.textContent = `PLAYER WIN: ${playerResult}`;
  comFinal.textContent = `COMPUTER WIN: ${computerResult}`;
  tieFinal.textContent = `TIE: ${tieResult}`;
  if (playerResult > computerResult) {
    finalRes.textContent = "PLAYER WIN! HURRAY CONGRATULATIONS";
    finalRes.style.color = "green";
  } else if (playerResult < computerResult) {
    finalRes.textContent = "COMPUTER WIN! TRY AGAIN LATER";
    finalRes.style.color = "red";
  } else {
    finalRes.textContent = "ITS A TIE! NO WINNER";
  }
}
function resetBtn(playerSelection){
  btns.forEach(btn => btn.disabled = false)
  game(playerSelection)
}

function disableBtn() {
  btns.forEach(btn => btn.disabled = true)
  
}
function game(e) {
  playCount++;
  gameStart(e.target.value);
  if (playCount == 5) {
    finalResult();
    playCount = 0;
    disableBtn();
  }
}

games.forEach((button) => {
  button.addEventListener("click", game);
});
resets.addEventListener("click", resetBtn);
