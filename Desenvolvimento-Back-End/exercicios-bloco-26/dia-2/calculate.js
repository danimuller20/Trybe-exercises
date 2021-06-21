function randomNumber() {
  const random = Math.floor(Math.random() * 100 + 1);
  return random;
}

function calculate(num1, num2, num3) {
  const promise = new Promise((resolve, reject) => {
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
      reject(Error('Informe apenas números!'));
    }
    const result = (num1 + num2) * num3;

    if (result < 50){
       reject(Error('Valor muito baixo!'))
    }
    resolve(result);
  });
  return promise;
}

calculate(randomNumber(), randomNumber(), randomNumber())
.then((response) => console.log(`Resultado: ${response}`))
.catch((err) => console.log(err.message))

async function asyncCalculate() {
  try {
    const response = await calculate(randomNumber(), randomNumber(), randomNumber());
    console.log(`Resultado: ${response}`);
  } catch (error) {
    console.error(error.message)
  }
}
asyncCalculate();