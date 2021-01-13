const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const orderedList = (a, b) => (a - b);// (a-b) faz com que os números sejam ordenados em ordem crescente.

const result = oddsAndEvens.sort(orderedList);
console.log(`Os números estão ordenados em ordem crescente: ${result}`);
