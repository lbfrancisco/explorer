let userName = prompt('Por favor, insira seu nome:');
let firstGrade = Number(prompt('Insira a primeira nota do bimestre:'));
let secondGrade = Number(prompt('Insira a segunda nota do bimestre:'));
let thirdGrade = Number(prompt('Insira a terceira nota do bimestre:'));

let gradeAverage = ((firstGrade + secondGrade + thirdGrade) / 3).toFixed(2);
let result = gradeAverage > 6 ? 
  alert(`Meus parabéns ${userName}, você passou no bimestre com uma nota de ${gradeAverage}!`) :
  alert(`Oops! ${userName}, você não passou no bimestre! Sua nota foi de ${gradeAverage}. Estude mais e se dedique na recuperação!`);