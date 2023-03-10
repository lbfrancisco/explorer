import { Modal } from './modal.js';
import { setErrorModal } from './error.js';
import { calculateIMC, handleCloseModal, displayResultMessage } from './utils.js';

const buttonCalculate = document.querySelector("#calculate");
const buttonClose = document.querySelector("#close-modal");
const main = document.querySelector('main');

buttonCalculate.addEventListener('click', handleResult);
buttonClose.addEventListener('click', handleCloseModal);

/* Keyboard Events */
document.addEventListener('keydown', (event) => {
  const isEscapePressed = event.key === 'Escape' && !Modal.wrapper.classList.contains('hide');
  const isEnterPressed = event.key === 'Enter' && Modal.wrapper.classList.contains('hide');

  if (isEscapePressed) return Modal.toggle(Modal.wrapper);
  if (isEnterPressed) return handleResult()
});

function handleResult() {
  const weight = Number(main.querySelector('#weight').value);
  const height = Number(main.querySelector('#height').value) / 100;

  const weightOrHeightIsEmpty = !weight || !height;
  const weightOrHeightIsNegative = weight < 0 || height < 0;

  if (weightOrHeightIsEmpty) return setErrorModal('Por favor, insira o seu peso e altura.');
  if (weightOrHeightIsNegative) return setErrorModal('Números negativos não são válidos.');
  
  const result = calculateIMC(weight, height);
  displayResultMessage(result);
}