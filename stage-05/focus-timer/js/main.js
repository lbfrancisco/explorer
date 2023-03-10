import { 
  play, pause, stop, stopWatch, 
  soundOn, soundOff, 
  playControls, pauseControls, resetControls, toggleSound
} from './controls.js';
import { countdown, resetTimer, timer, getMinutes, updateMinutes } from './timer.js';
import { Sound } from './sound.js';

const sound = Sound();

const minutesDisplay = document.querySelector('.minutes');
let minutes = Number(minutesDisplay.textContent);

/* EVENT LISTENERS */
play.addEventListener('click', () => {
  playControls();
  countdown();
  sound.startAudio();
});

pause.addEventListener('click', () => {
  pauseControls();
  clearInterval(timer);
  sound.startAudio();
});
stop.addEventListener('click', () => {
  resetControls();
  resetTimer();
  sound.startAudio();
});

stopWatch.addEventListener('click', () => {
  let newMinutes = getMinutes();

  if(!newMinutes) {
    return resetTimer();
  }

  minutes = newMinutes;
  minutesDisplay.textContent = String(minutes).padStart(2, '0');
  updateMinutes(minutes);
});

soundOn.addEventListener('click', toggleSound);
soundOff.addEventListener('click', toggleSound);