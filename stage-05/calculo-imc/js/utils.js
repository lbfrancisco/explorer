import { Modal } from './modal.js';

export function calculateIMC(weight, height) {
  return weight / (height**2);
}

export function handleCloseModal() {
  Modal.toggle(Modal.wrapper);
}

export function displayResultMessage(result) {
  Modal.result.querySelector('h2').innerText = `Seu IMC é de ${result.toFixed(2)}`;
  handleCloseModal();
}