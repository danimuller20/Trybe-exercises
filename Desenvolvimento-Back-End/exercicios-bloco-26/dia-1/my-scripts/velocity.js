const readline = require('readline-sync');

const distance = readline.questionInt('Distância percorrida (met): ');
const time = readline.questionInt('Tempo gasto (seg): ');

const calcCarSpeed = (distance, time) => {
  const speed = (distance / time).toFixed(2);
  console.log(`A velocidade foi de ${speed} m/s`)
}

calcCarSpeed(distance, time);
