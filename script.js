// VARIABLES
let scorePlayer = 0;
let choicePlayer;
let choiceComputer;
let newRound;
let winLose;

//CONSTANTS
const containerStep1 = document.querySelector('.containerChoices');
const containerStep2 = document.querySelector('.container__match');
const containerStep3 = document.querySelector('.container__resultMatch');

const choicesAll = document.querySelectorAll('.container__choice');
const score = document.querySelector('.number__score');

const playerChoice = document.querySelector('.container__pick__player .container__choice');
const playerImage = playerChoice.querySelector('img');


const computerChoice = document.querySelector('.container__pick__computer .container__choice');
const computerImage = computerChoice.querySelector('img');

const result = document.querySelector('.result');
const resultMatch = document.querySelector('.container__resultMatch');

const buttonPlayAgain = document.querySelector('.buttton__playAgain');

const choices = ['rock', 'paper', 'scissors'];

const outcomes = {
	rock: { beats: 'scissors' },
	paper: { beats: 'rock' },
	scissors: { beats: 'paper' }
}

function initGame() {
	score.innerHTML = scorePlayer;
}

function toggleHide(element){
  element.classList.toggle('hidden');
}

function decideWinner(choicePlayer, choiceComputer) {
	if (choicePlayer === choiceComputer) {
		winLose = 'TIED'
	} else if (outcomes[choicePlayer].beats === choiceComputer) {
		winLose = 'WIN';
		scorePlayer++;
	} else {
		winLose = 'LOSE';
	}
}


initGame();

choicesAll.forEach(choice => choice.addEventListener('click', function() {
  if (!containerStep1.classList.contains('hidden')){
	choicePlayer = `${choice.classList[1]}`;
	loopGame();
  }
}))

function loopGame() {
	computerChoice.classList.add('hidden');
	result.innerHTML = '';
	resultMatch.classList.add('hidden');

	choiceComputer = choices[Math.trunc(Math.random() * 3)];

	decideWinner(choicePlayer, choiceComputer);

  toggleHide(containerStep1)
  toggleHide(containerStep2)

	playerChoice.classList.remove(`${playerChoice.classList[1]}`);
	playerChoice.classList.add(`${choicePlayer}`);
	playerImage.src = `images/icon-${choicePlayer}.svg`;


  setTimeout(() => {
		computerChoice.classList.remove(`${computerChoice.classList[1]}`);
		computerChoice.classList.add(`${choiceComputer}`);
		computerImage.src = `images/icon-${choiceComputer}.svg`;
    toggleHide(computerChoice);
		result.innerHTML = winLose;
	  }, 1000); 

    setTimeout(() => {
      toggleHide(resultMatch);
      score.innerHTML = scorePlayer;
    }, 2000);

	computerChoice.style.marginTop = '0';
	playerChoice.style.marginTop = '0';
}

buttonPlayAgain.addEventListener('click', function() {
	initGame();
  toggleHide(containerStep2);
  toggleHide(containerStep1);
})