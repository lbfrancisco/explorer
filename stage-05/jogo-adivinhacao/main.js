const screenPlaying = document.querySelector('.playing'); 
const screenGameover = document.querySelector('.gameover'); 
const inputNumberElement = document.querySelector('#input-number');
const tryButton = document.querySelector('#try-button');
const resetButton = document.querySelector('#reset-button');

tryButton.addEventListener('click', handleTry);
resetButton.addEventListener('click', handleReset);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && screenPlaying.classList.contains('hide')) {
    handleReset();
  }
});

let randomNumber = Math.round(Math.random() * 10);
let attempts = 0;

function handleTry(event) {
  event.preventDefault();

  const inputNumber = Number(inputNumberElement.value);

  if (inputNumber < 0 || inputNumber > 10) {
    return alert('Por favor, insira um número entre 0 e 10.');
  }

  attempts++;

  if (inputNumber === randomNumber) {
    toggleScreen();
    screenGameover.querySelector('h2').innerText = `Você acertou em ${attempts} tentativas!`;
  }
  
  inputNumberElement.value = '';
}

function handleReset() {
  toggleScreen();
  attempts = 0;
  randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen() {
  screenPlaying.classList.toggle('hide');
  screenGameover.classList.toggle('hide');
}

// let generatedNumber = Math.round(Math.random() * 10);
// let xAttempts = 0;

// const gameoverElement = document.querySelector('.gameover');
// const playingElement = document.querySelector('.playing');
// const inputNumberElement = document.querySelector('#input-number');

// const tryButton = document.querySelector('#try-button');
// tryButton.addEventListener('click', (event) => {
//   event.preventDefault();

//   let inputNumber = Number(inputNumberElement.value);
//   xAttempts++;

//   if(generatedNumber === inputNumber) {
//     playingElement.classList.toggle('hide');
//     gameoverElement.classList.toggle('hide');
//     document.querySelector('.gameover h2').innerText = `Você acertou em ${xAttempts} tentativas!`;
//   }
// });

// const playAgainButton = document.querySelector('#play-again-button');
// playAgainButton.addEventListener('click', (event) => {
//   event.preventDefault();

//   xAttempts = 0;
//   generatedNumber = Math.round(Math.random() * 10);

//   playingElement.classList.toggle('hide');
//   gameoverElement.classList.toggle('hide');
// });