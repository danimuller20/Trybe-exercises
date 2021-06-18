const readline = require('readline-sync');

  const scriptOptions = () => {
    const option = readline.questionInt(
      `Escolha uma das opções: 
      1 - para Calcular IMC;
      2 - para Calcular velocidade média;
      3 - para Jogo de adivinhação. `);

    if (option === 1) {
     require('./imc');
      return;
    }

    if (option === 2) {
      require('./velocity');
      return;
    }

    if (option === 3) {
      require('./prize-draw');
      return;
    }

    console.log('Escolha um número válido!')
    scriptOptions();
  }

  scriptOptions();
