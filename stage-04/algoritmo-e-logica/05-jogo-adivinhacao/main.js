let computedNumber = prompt('Adivinhe o número que estou pensando? O número está entre 0 e 10!');
let generatedNumber = Math.round(Math.random() * 10);

let triesCount = 1;

while (computedNumber !== generatedNumber) {
  computedNumber = Number(prompt('Você errou, tente novamente:'));
  triesCount++;
}

alert(`Parabéns! O número que eu pensei foi ${generatedNumber} e você adivinhou o número em ${triesCount} tentativas.`);