let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
  for (let position = 0; position < index; position += 1) {
    if (numbers[index] < numbers[position]) {
      let where = numbers[index];

     numbers[index] = numbers[position];
     numbers[position] = where;
    }
  }
}

console.log(numbers)