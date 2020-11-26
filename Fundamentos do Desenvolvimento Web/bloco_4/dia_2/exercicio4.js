let numbers = [5, 9, 3, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}
result = sum / numbers.length;

if (result > 20) {
  console.log('Valor maior que 20, o valor foi: ' + result.toFixed());
} else {
  console.log('Valor menor que 20, o valor foi: ' + result.toFixed());
}


