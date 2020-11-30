let divisors;
let numberToCheck =2;

for (let number = 1; number < numberToCheck && divisors !== 1; number += 1) {
  divisors = 0;
  if (numberToCheck % number == 0) divisors += 1;
}

if (divisors === 0) console.log(numberToCheck + ' é primo');
else console.log(numberToCheck + ' não é primo');