export function Events({
  play, pause, stop,
  playButton, pauseButton, stopButton, setButton,
  florestButton, coffeeShopButton, firePlaceButton, rainButton,
  increment, decrement,
  incrementButton, decrementButton,
  timer, sounds, lightButton, darkButton,
}) {

  const soundsButtons = [florestButton, rainButton, coffeeShopButton, firePlaceButton];
  const queue = sounds.queue;

  function init() {
    soundsButtons.map(button => {
      
      if (button.classList.contains("selected")) {
        const className = button.classList[0];

        queue.push(className);
        queue.push(className);
      }

      button.addEventListener("click", () => {
        queue.splice(0, queue.length);
        
        soundsButtons.filter(buttonSelected => {
          const isSelected = buttonSelected.classList.contains("selected");

          if (isSelected) {
            buttonSelected.classList.remove("selected");
            queue.push(buttonSelected.classList[0]);
            
            if (timer.isTiming()) {
              sounds.pause(queue[0]);
            }
          }
        });

        button.classList.add("selected");
        queue.push(button.classList[0]);
        
        if (timer.isTiming()) {
          sounds.play(queue[1], true);
        }
      });
    })

    playButton.addEventListener("click", () => {
      play();
      sounds.pause(queue[0]);
      sounds.play(queue[1], true);
      sounds.play('click');
      timer.countdown();
    });
    
    pauseButton.addEventListener("click", () => {
      pause();
      sounds.pause(queue[1]);
      sounds.play('click');
      timer.hold();
    });
    
    stopButton.addEventListener("click", () => {
      stop();
      sounds.pause(queue[1]);
      sounds.play('click');
      timer.reset();
    });

 
    
    setButton.addEventListener("click", timer.getMinutes);
    incrementButton.addEventListener("click", increment);
    decrementButton.addEventListener("click", decrement);


    lightButton.addEventListener("click", toggleThemeMode);
    darkButton.addEventListener("click", toggleThemeMode);
    
  }

  function toggleThemeMode() {
    lightButton.classList.contains("hide") ? lightButton.classList.remove("hide") : lightButton.classList.add("hide");
    darkButton.classList.contains("hide") ? darkButton.classList.remove("hide") : darkButton.classList.add("hide");
    
    const body = document.querySelector("body");
    body.classList.toggle("light");
    body.classList.toggle("dark");
  }

  return {
    init
  };
}
