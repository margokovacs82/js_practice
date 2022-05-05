'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore, scores, activePlayer, stillPlaying;

//Starting conditions
function initialize() {
  currentScore = 0;
  scores = [0, 0];
  activePlayer = 0;
  stillPlaying = true;

  player1El.classList.remove('player--winner');
  player0El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  diceEl.classList.add('hidden');

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
}

initialize();

//ROLLING DICE
btnRoll.addEventListener('click', rollTheDice);

function rollTheDice() {
  if (stillPlaying) {
    //generate a random roll
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    //display
    diceEl.classList.remove('hidden');
    diceEl.src = 'dice-' + diceRoll + '.png';
    //check if 1 // if 1, swich players
    if (diceRoll !== 1) {
      currentScore += diceRoll;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
    if (diceRoll === 1) {
      switchPlayer();
    }
  }
}

//HOLDING SCORE
btnHold.addEventListener('click', holdTheScore);

function holdTheScore() {
  if (stillPlaying) {
    //add score
    scores[activePlayer] += currentScore;
    console.log(scores[activePlayer]);
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // if it is bigger then 20
    if (scores[activePlayer] >= 20) {
      stillPlaying = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

      diceEl.classList.add('hidden');
    } else {
      //switch player
      switchPlayer();
    }
  }
}

//SWITCH PLAYER
function switchPlayer() {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

//RESET GAME
btnNew.addEventListener('click', resetGame);

function resetGame() {
  initialize();
}
