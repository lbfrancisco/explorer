const phrases = [
  "A vida trará coisas boas se tiver paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
  "Não há que ser forte. Há que ser flexível.",
  "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
  "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
  "A juventude não é uma época da vida, é um estado de espírito.",
  "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos."
]

const openCookieScreen = document.querySelector('#open-cookie');
const phraseCookieScreen = document.querySelector('#phrase-cookie');
const cookieButton = document.querySelector('#open-cookie button');
const resetButton = document.querySelector('#phrase-cookie button');

let randomPhrase = phrases[Math.round(Math.random() * (phrases.length - 1))];

cookieButton.addEventListener('click', handleCookie);
resetButton.addEventListener('click', handleReset);

function handleCookie(event) {
  event.preventDefault();

  randomPhrase = phrases[Math.round(Math.random() * (phrases.length - 1))];

  const phrase = phraseCookieScreen.querySelector('span');
  phrase.innerText = randomPhrase;
  
  toggleScreen();
}

function handleReset() {
  toggleScreen();
}

function toggleScreen() {
  openCookieScreen.classList.toggle('hide');
  phraseCookieScreen.classList.toggle('hide');
}