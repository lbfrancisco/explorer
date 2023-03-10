export const Modal = {
  wrapper: document.querySelector(".box"),
  result: document.querySelector('#imc-result'),
  error: document.querySelector('#error'),
  toggle: (modal) => {
    modal.classList.toggle('hide');
  }
}