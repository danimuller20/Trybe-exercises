const getRandom = () => Math.floor(Math.random() * (50 - 1) + 1);
const randomArray = () => {
  let array = [];
  for (let index = 0; index < 10; index += 1){
    array.push(getRandom());
  }
  return array;
}

const asyncFunction = () => {
  const result = randomArray().reduce((accumulator, currentValue) => {
    accumulator += (currentValue * currentValue);
    return accumulator;
  }, 0);
  return new Promise((resolve, reject) => {
    result < 8000 ? resolve(result) : reject(result);
  });
}

const response = () => {
  asyncFunction()
    .then(result => [2, 3, 5, 10].map(sum => `Número de sucesso ${result}: ${result / sum}` ))
    .then(msg => console.log(msg))
    .catch(number => console.log(`Número de fracasso: ${number} :(`))
}

response();
