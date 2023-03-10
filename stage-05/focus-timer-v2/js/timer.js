export function Timer({ resetControls, minutesDisplay, secondsDisplay, sounds }) {
  let minutes = Number(minutesDisplay.textContent);
  let timer, isTimerRunning = false;

  function countdown() {
    isTimerRunning = true;

    timer = setInterval(() => {
      let minutes = Number(minutesDisplay.textContent);
      let seconds = Number(secondsDisplay.textContent);

      if (minutes === 0 && seconds === 0) {
        updateDisplay();
        resetControls();
        clearInterval(timer);
        sounds.pause(sounds.queue[1]);
        sounds.play('finish');
        return;
      }

      if (seconds <= 0) {
        seconds = 60;
        minutes--;
      }

      seconds--;
      updateDisplay(minutes, seconds);
    }, 1000);
  }

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes;
    seconds = seconds === undefined ? 0 : seconds;

    if (newMinutes < 0) newMinutes = 0;
    if (newMinutes > 60) newMinutes = 60;

    minutesDisplay.textContent = String(newMinutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  }

  function increment() {
    if(isTimerRunning) return;

    let minutes = Number(minutesDisplay.textContent);

    if (minutes >= 60) return;

    minutes = minutes + 5;
    updateDisplay(minutes);
    sounds.play('click');
  }

  function decrement() {
    if(isTimerRunning) return;

    let minutes = Number(minutesDisplay.textContent);

    if (minutes <= 0) return;

    minutes = minutes - 5;
    updateDisplay(minutes);
    sounds.play('click');
  }

  function reset() {
    updateDisplay(minutes, "00");
    clearInterval(timer);
    isTimerRunning = false;
  }

  function hold() {
    clearInterval(timer);
    isTimerRunning = false;
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes;
  }

  function getMinutes() {
    let newMinutes = prompt("Por favor, insira quantos minutos você deseja?");

    if (!newMinutes) return reset();

    if (newMinutes < 0 || newMinutes > 60) {
      return alert("Oops! Você precisa colocar um tempo entre 1 e 60 minutos.");
    }

    minutes = newMinutes;
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    updateMinutes(minutes);
  }

  function isTiming() {
    return isTimerRunning;
  }

  return {
    countdown, updateDisplay,
    increment, decrement,
    reset, hold,
    getMinutes, updateMinutes,
    isTiming
  };
}
