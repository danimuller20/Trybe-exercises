const getRandom = () => Math.floor(Math.random() * (50 - 1) + 1);
const randomArray = () => {
  let array = [];
  for (let index = 0; index < 10; index += 1){
    array.push(getRandom());
  }
  return array;
}

const asyncFunction = () => {
  return new Promise((resolve, reject) => {
    const result = randomArray().reduce((accumulator, currentValue) => {
      accumulator += (currentValue * currentValue);
      return accumulator;
    }, 0);

    result < 8000 ? resolve(result) : reject(result);
  });
}

const response = () => {
  asyncFunction()
    .then(result => [2, 3, 5, 10].map(sum => console.log('Primeiro: ' + result / sum)))
    .then(array =>  array.reduce((acc, cur) => acc + cur), 0)
    .catch(number => console.log(`Número de fracasso: ${number} :(`))
}
response();
