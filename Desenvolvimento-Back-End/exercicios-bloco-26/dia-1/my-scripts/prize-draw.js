const readline = require('readline-sync');

const checkNumbers = (number, random) => {

  if (random === number) {
    console.log('Parabéns, número correto!');
    return;
  }

  console.log(`Opa, não foi dessa vez. O número era ${random}`)
}

const randomNumber = () => {
  
  const random = Math.round(Math.random() * 10);
  
  const number = readline.questionInt('Escolha um numero de 0 a 10: ');

  checkNumbers(number, random);

  const question = readline.question(
    'Deseja jogar novamente? (digite "s" para sim, caso contrário digite qualquer outra coisa: '
    );

  if (question !== 's') {
    console.log('Tudo bem! Até a próxima!');
    return;
  }

  randomNumber();
}

randomNumber();