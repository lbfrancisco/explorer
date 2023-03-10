let patients = [
  {
    name: 'Lucas',
    age: 19,
    weight: 70,
    height: 1.75
  },
  {
    name: 'Julia',
    age: 23,
    weight: 65,
    height: 1.65
  },
  {
    name: 'Marcos',
    age: 37,
    weight: 90,
    height: 1.85
  },
];

// function Patient(name, age, weight, height) {
//   const patient = {
//     name,
//     age,
//     weight,
//     height
//   }
//   patients.push(patient);
// }

for(let patient of patients) {
  let imc = (patient.weight / patient.height).toFixed(2);
  alert(`Paciente ${patient.name} possui o IMC de: ${imc}`);
}