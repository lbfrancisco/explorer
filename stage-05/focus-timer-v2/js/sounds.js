export function Sounds() {
  const sounds = [
    {
      name: 'florest',
      src: new Audio("https://github.com/lbfrancisco/explorer-stage5-focus-timer2.0/blob/main/audios/florest.wav?raw=true")
    }, 
    {
      name: 'rain',
      src: new Audio("https://github.com/lbfrancisco/explorer-stage5-focus-timer2.0/blob/main/audios/rain.wav?raw=true")
    }, 
    {
      name: 'coffeeshop',
      src: new Audio("https://github.com/lbfrancisco/explorer-stage5-focus-timer2.0/blob/main/audios/coffeeshop.wav?raw=true")
    }, 
    {
      name: 'fireplace',
      src: new Audio("https://github.com/lbfrancisco/explorer-stage5-focus-timer2.0/blob/main/audios/fireplace.wav?raw=true")
    },
    {
      name: 'click',
      src: new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    },
    {
      name: 'finish',
      src: new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true") 
    }
  ];

  const queue = [];

  function play(name, loop) {
    return sounds.filter(sound => {
      if (sound.name === name) {
        sound.src.play();
        sound.src.volume = 0.5;
        
        loop ? sound.src.loop = true : sound.src.loop = false;
      }
    });
  }

  function pause(name) {
    return sounds.filter(sound => sound.name === name ? sound.src.pause() : null);
  }

  return {
    play,
    pause,
    queue
  }
}