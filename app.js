let userScore =0;
let compScore =0;
// caching the dom
const userScore_span = document.getElementById("user-score"); //underscore to differention between DOM elements and js variables
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreBoard"); // this is basically get element by id, but for class ClassName {
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById('r')
const paper_div = document.getElementById('p')
const scissors_div = document.getElementById('s')

function getCompChoice(){
  const choices = ['r','p','s'];
  const randomNumber = Math.floor(Math.random()*3);
  return choices[randomNumber];
}
function toWord (letter){
  if (letter == 'r') return "Rock";
  if (letter == 'p') return "Paper";
  return "Scissors";
}

function win(userChoice,compChoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  result_div.innerHTML = toWord(userChoice) + " beats " + toWord(compChoice) + " YOU WIN! ";
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')}, 400 )

}
function lose(userChoice,compChoice){
  compScore++;
  compScore_span.innerHTML = compScore;
  result_div.innerHTML = toWord(compChoice) + " beats " + toWord(userChoice) + " YOU LOSE! ";
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow')}, 400 )
}
function draw(userChoice){
  result_div.innerHTML = " You both chose " + toWord(userChoice) + ", it's a draw ";
}
function game(userChoice){
  const compChoice = getCompChoice();
  switch (userChoice + compChoice){
    case "rs":
    case "pr":
    case "sp":
      win(userChoice,compChoice);
      break;
    case "sr":
    case "rp":
    case "ps":
      lose(userChoice,compChoice);
      break;
    default:
      draw(userChoice);

  }
}

function main(){
  rock_div.addEventListener('click', function() {
    game("r");
  })
  paper_div.addEventListener('click', function() {
    game("p");
  })
  scissors_div.addEventListener('click', function() {
    game("s");
  })
}
main()
