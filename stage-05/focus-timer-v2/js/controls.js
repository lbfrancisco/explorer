export function Controls({
  playButton,
  pauseButton,
  stopButton,
  setButton,
}) {

  function play() {
    playButton.classList.add('hide');
    pauseButton.classList.remove('hide');
    stopButton.classList.remove('hide');
    setButton.classList.add('hide');
  }

  function pause() {
    playButton.classList.remove('hide');
    pauseButton.classList.add('hide');
  }

  function stop() {
    playButton.classList.remove('hide');
    pauseButton.classList.add('hide');
    stopButton.classList.add('hide');
    setButton.classList.remove('hide');
  }

  return {
    play, 
    pause, 
    stop
  }
}