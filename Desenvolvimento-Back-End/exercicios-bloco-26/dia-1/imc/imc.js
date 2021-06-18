const readline = require('readline-sync');

const height = readline.questionFloat('Qual sua altura? ');
const weight = readline.questionFloat('Qual seu peso? ');

const calculateBodyMassIndex = (height, weight) => {
  console.log(`Peso: ${height}, Altura: ${weight}`)
  const bmi = (weight / Math.pow(height, 2)).toFixed(2);

  if (bmi < 18.5) {
    console.log(`IMC: ${bmi}, Abaixo do peso (magreza)`);
    return;
  }

  if (bmi > 18.5 && bmi <= 24.9) {
    console.log(`IMC: ${bmi}, Peso normal`);
    return;
  }

  if (bmi > 25.0 && bmi <= 29.9) {
    console.log(`IMC: ${bmi}, Acima do peso (sobrepeso)`);
    return;
  }

  if (bmi > 30.0 && bmi <= 34.9) {
    console.log(`IMC: ${bmi}, Obesidade grau I`);
    return;
  }

  if (bmi > 35.0 && bmi <= 39.9) {
    console.log(`IMC: ${bmi}, Obesidade grau II`);
    return;
  }

  if (bmi > 40.0) {
    console.log(`IMC: ${bmi}, Obesidade graus III e IV`);
    return;
  }
}

calculateBodyMassIndex(height, weight);
