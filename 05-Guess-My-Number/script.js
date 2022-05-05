'use strict';

let secretNumber = Math.floor(Math.random() * 20 + 1);
console.log(secretNumber);
let highScore = Number(document.querySelector('.highscore').textContent);
let score = 20;

function displayMessages(message, type) {
  document.querySelector(type).textContent = message;
}

function handleCheckEvent() {
  const guess = Number(document.querySelector('.guess').value);
  // when no imput
  if (!guess) {
    displayMessages('No number given!', '.message');
  }
  // when player wins
  if (guess === secretNumber) {
    displayMessages(secretNumber, '.number');
    displayMessages('Yupiiiii, correct!', '.message');
    // winner style:
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // highscore beállítása
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // when input but wrong
  if (guess && guess !== secretNumber) {
    score -= 1;
    document.querySelector('.score').textContent = score;
    // if the score is higher than zero, play continues
    if (score > 0) {
      displayMessages(
        guess < secretNumber ? 'too low!' : 'too high!',
        '.message'
      );
      // if the number is out of range
      if (guess < 0 || guess > 20) {
        document.querySelector(
          '.message'
        ).textContent = `your guess (${guess}) is not between 1 and 20, please try again!!`;
      }
      // if the score is lower than zero, loosing
    } else {
      document.querySelector(
        '.message'
      ).textContent = `you lost! the secret number was ${secretNumber}. Press "again" if you want to play.`;
      //LESZEDI A GOMBRÓL A LISTENERT, ha lemegy a score nullára:
      document
        .querySelector('.check')
        .removeEventListener('click', handleCheckEvent);
    }
  }
}
document.querySelector('.check').addEventListener('click', handleCheckEvent);

function pushAgainButton() {
  document.querySelector('.check').addEventListener('click', handleCheckEvent);
  secretNumber = Math.floor(Math.random() * 20 + 1);
  console.log(secretNumber);
  score = 20;

  displayMessages(score, '.score');
  displayMessages('Start guessing...', '.message');
  displayMessages('?', '.number');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
}
document.querySelector('.again').addEventListener('click', pushAgainButton);
