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

    if (result < 8000) throw new Error();
    return result;
}

const arrayGeneratefromResult = result => [2, 3, 5, 10].map(arr =>  + result / arr);
const response = async () => {
  try {
    const sum = await asyncFunction();
    console.log(`A soma dos números é: ${sum}`)
    const array = await arrayGeneratefromResult(sum);
    console.log(array);
  } catch (error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
}
response();