'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let Score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('😒 No Number!');
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎊 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (Score > highScore) {
      highScore = Score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else {
    if (Score > 1) {
      displayMessage(guess > secretNumber ? '👆 Too High!' : '👇 Too Low!');
      Score--;
      document.querySelector('.score').textContent = Score;
    } else {
      displayMessage('😒 Game Over!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  Score = 20;
  document.querySelector('.score').textContent = Score;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
