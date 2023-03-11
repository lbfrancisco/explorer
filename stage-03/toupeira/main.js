const buttons = document.querySelectorAll('button');

let randomButtonIndex = Math.floor(Math.random() * buttons.length);
let chosedMole = buttons[randomButtonIndex];
let playing = true;
let game;

chosedMole.classList.add('chosed');

function initGame() {
  game = setInterval(() => {
    for (const button of buttons) {
      if (button.classList.contains('chosed')) {
        button.classList.remove('chosed');
      }

      button.addEventListener('click', () => {
        alert('Você acertou!');
        button.classList.remove('chosed');
        clearInterval(game);
      })
    }

    randomButtonIndex = Math.floor(Math.random() * buttons.length);
    chosedMole = buttons[randomButtonIndex];
    chosedMole.classList.add('chosed');

  }, 5000);
}

initGame()

// do {
//   for (const button of buttons) {
//     button.addEventListener('click', (event) => {
//       event.preventDefault();
  
//       if (button.classList.contains('chosed')) {
//         alert('Jogo finalizado!');
//         chosedMole.classList.remove('chosed');
//       }
//     });
//   }
  

//   randomButtonIndex = Math.floor(Math.random() * buttons.length);
//   chosedMole = buttons[randomButtonIndex];
// } while (false);