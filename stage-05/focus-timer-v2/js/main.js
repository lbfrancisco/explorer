import { Controls } from './controls.js';
import { Events } from './events.js';
import { Sounds } from './sounds.js';
import { Timer } from './timer.js';
import { 
  playButton, pauseButton, stopButton, setButton, 
  florestButton, coffeeShopButton, firePlaceButton, rainButton,
  minutesDisplay, secondsDisplay,
  incrementButton, decrementButton,
  lightButton, darkButton 
} from './elements.js';

const sounds = Sounds();

const controls = Controls({
  playButton,
  pauseButton,
  stopButton,
  setButton,
});

const timer = Timer({
  resetControls: controls.stop,
  minutesDisplay,
  secondsDisplay,
  sounds,
});

const events = Events({
  play: controls.play, pause: controls.pause, stop: controls.stop,
  playButton, pauseButton, stopButton, setButton,
  florestButton, coffeeShopButton, firePlaceButton, rainButton,
  increment: timer.increment, decrement: timer.decrement,
  incrementButton, decrementButton,
  timer, minutesDisplay, sounds, lightButton, darkButton
});

events.init();