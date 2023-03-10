import { resetControls } from './controls.js';
import { Sound } from './sound.js';

const sound = Sound();

const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');

let minutes = Number(minutesDisplay.textContent);
let timer;

function updateTimerDisplay(newMinutes, seconds) {
  newMinutes = newMinutes === undefined ? minutes : newMinutes;
  seconds = seconds === undefined ? 0 : seconds;
  minutesDisplay.textContent = String(newMinutes).padStart(2, '0');
  secondsDisplay.textContent = String(seconds).padStart(2, '0');
}

function countdown() {
  timer = setInterval(() => {
    let minutes = Number(minutesDisplay.textContent);
    let seconds = Number(secondsDisplay.textContent);

    const isTimeOver = minutes === 0 && seconds === 0;

    if (isTimeOver) {
      clearInterval(timer);
      updateTimerDisplay();
      resetControls();
      sound.endAudio();
      return;
    }

    if (seconds <= 0) {
      seconds = 60;
      minutes--;
    }

    seconds--;
    updateTimerDisplay(minutes, seconds);
  }, 1000);
}

function resetTimer() {
  updateTimerDisplay(minutes, '00');
  clearInterval(timer);
}

function getMinutes() {
  let newMinutes = prompt('Quanto minutos de foco você deseja?');
  if (!newMinutes) return false;

  return newMinutes;
}

function updateMinutes(newMinutes) {
  minutes = newMinutes;
}

export { countdown, resetTimer, timer, getMinutes, updateMinutes };