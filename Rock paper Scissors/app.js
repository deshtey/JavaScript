let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreBoard");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const compChoice = document.querySelector(".compChoice");
const userChoice = document.querySelector(".userChoice");
const winLose = document.querySelector(".winLose");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win() {
  userScore++;
  userScore_span.innerHTML = userScore;
  winLose.innerHTML = "You win!!";
}
function lose() {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  winLose.innerHTML = "You lose!";
}
function draw() {
  winLose.innerHTML = "";
}

function displayWinner(comp, user) {
  const messagediv = document.getElementById("message");
  let message;
  switch (user + comp) {
    case "rs":
    case "sr":
      message = "Rock crushes scissors";
      break;
    case "rp":
    case "pr":
      message = "Paper covers rock";
      break;
    case "sp":
    case "ps":
      message = "Scissors cuts paper";
      break;
    default:
      message = "Draw!";
  }
  if (user && comp) {
    document.getElementsByClassName("result");
    messagediv.innerHTML = message;
  }
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win();
      break;
    case "rp":
    case "ps":
    case "sr":
      lose();
      break;
    case "rr":
    case "pp":
    case "ss":
      draw();
  }

  displayWinner(computerChoice, userChoice);
}
function main() {
  rock_div.addEventListener("click", function() {
    game("r");
  });
  paper_div.addEventListener("click", function() {
    game("p");
  });
  scissors_div.addEventListener("click", function() {
    game("s");
  });
}
main();
