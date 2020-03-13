/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var totalScoreOne = document.getElementById("score-0");
var totalScoreTwo = document.getElementById("score-1");
var currentScoreOne = document.getElementById("current-0");
var currentScoreTwo = document.getElementById("current-1");
var dice = document.querySelector(".dice");
var turn = 0;
var current = 0;
var score = [0, 0];

dice.style.display = "none";

newGame();
function newGame () {
	reset();
	dice.style.display = "none";
	score = [0, 0];
	totalScoreOne.innerHTML = score [0];
	totalScoreTwo.innerHTML = score [1];
	document.getElementsByClassName("btn-roll")[0].style.display = "block";
	document.getElementsByClassName("btn-hold")[0].style.display = "block";
	document.getElementById("name-0").innerHTML = "Player 1";
	document.getElementById("name-1").innerHTML = "Player 2";
}

function reset () {
	current = 0;
	currentScoreOne.innerHTML = current;
	currentScoreTwo.innerHTML = current;
	turn === 0 ? turn = 1 : turn = 0;
}

document.querySelector('.btn-roll').addEventListener('click', function() {
	var diceValue = Math.floor( Math.random() *6 ) + 1;
	current += diceValue;
	document.getElementById("current-" + turn).innerHTML  = current;
	dice.style.display = "block";
	dice.src = 'dice-' + diceValue + '.png';
	if (diceValue === 1) {
		reset ();
	}
});

document.querySelector('.btn-hold').addEventListener('click', function () {
	score[turn] += current;
	document.getElementById("score-" + turn).innerHTML = score[turn];
	if (score[turn] > 20) {
		document.getElementById("name-" + turn).innerHTML = "WINNER";
		document.getElementsByClassName("btn-roll")[0].style.display = "none";
		document.getElementsByClassName("btn-hold")[0].style.display = "none";
	}
	reset();
});
