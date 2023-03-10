import { Sound } from './sound.js';

const sound = Sound();

const Controls = {
  play: document.querySelector('.play'),
  pause: document.querySelector('.pause'),
  stop: document.querySelector('.stop'),
  stopWatch: document.querySelector('.stopwatch'),
  soundOn: document.querySelector('.sound-on'),
  soundOff: document.querySelector('.sound-off'),
}

function playControls() {
  Controls.play.classList.add('hide');
  Controls.pause.classList.remove('hide');
  Controls.stop.classList.remove('hide');
  Controls.stopWatch.classList.add('hide');
}

function pauseControls() {
  Controls.play.classList.remove('hide');
  Controls.pause.classList.add('hide');
}

function resetControls() {
  Controls.play.classList.remove('hide');
  Controls.pause.classList.add('hide');
  Controls.stop.classList.add('hide');
  Controls.stopWatch.classList.remove('hide');
}

function toggleSound() {
  const isPlaying = sound.bgAudio.paused;
  
  isPlaying ? sound.bgAudio.play() : sound.bgAudio.pause();

  soundOn.classList.toggle('hide');
  soundOff.classList.toggle('hide');
}

export const { play, pause, stop, stopWatch, soundOn, soundOff } = Controls;
export { playControls, pauseControls, resetControls, toggleSound };