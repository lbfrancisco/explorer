let students = [
  {
    name: 'João',
    firstGrade: 8,
    secondGrade: 7,
  },
  {
    name: 'Letícia',
    firstGrade: 10,
    secondGrade: 6,
  },
  {
    name: 'Diego',
    firstGrade: 9,
    secondGrade: 5,
  },
  {
    name: 'Júlia',
    firstGrade: 7,
    secondGrade: 3,
  },
];

function getStudentAverage(firstGrade, secondGrade) {
  return (firstGrade + secondGrade) / 2;
}

for(let student of students) {
  let average = getStudentAverage(student.firstGrade, student.secondGrade);
  let result = average > 7 ? `Parabéns, ${student.name}! Você foi aprovado(a) no concurso!` : `Não foi dessa vez ${student.name}, tente novamente!`;
  alert(`A média do(a) aluno(a) ${student.name} é: ${average} \n${result}`);
}