import { Modal } from './modal.js';

const error = Modal.error;

export function setErrorModal(message) {
  error.querySelector('span').innerText = message;
  
  setTimeout(() => {
    Modal.toggle(error);
  }, 1000 * 5);
  
  Modal.toggle(error);
}