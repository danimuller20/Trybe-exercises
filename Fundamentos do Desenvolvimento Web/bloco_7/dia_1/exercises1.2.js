const factorial = number => {
  let result = 1;
  for (let index = number; index >= 1; index -= 1) {
    result = result * index;
  }
  console.log(result);
}
factorial(3)

const factorial2 = number => (number !== 1) ? number * factorial2(number - 1) : 1;
console.log(factorial2(3))