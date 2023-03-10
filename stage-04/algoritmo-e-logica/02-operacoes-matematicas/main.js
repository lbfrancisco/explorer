alert('Vamos fazer operações de 2 números');

let firstNumber = Number(prompt('Digite o primeiro operando:'));
let secondNumber = Number(prompt('Digite o segundo operando:'));

let sum = firstNumber + secondNumber;
let subtract = firstNumber - secondNumber;
let multiply = firstNumber * secondNumber;
let division = firstNumber / secondNumber;
let remainder = firstNumber % secondNumber;

// alert(`O resultado final é: Soma: ${sum} \nSubtração: ${subtract} \Multiplicação: ${multiply} \nDivisão: ${division} \nResto da divisão: ${remainder}`);

alert(`O resultado da soma é: ${sum}`);
alert(`O resultado da subtração é: ${subtract}`);
alert(`O resultado da multiplicação é: ${multiply}`);
alert(`O resultado da divisão é: ${division}`);
alert(`O resultado do resto da divisão é: ${remainder}`);