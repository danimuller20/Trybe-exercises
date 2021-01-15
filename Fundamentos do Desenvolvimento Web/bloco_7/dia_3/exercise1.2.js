const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

assert.strictEqual(typeof myRemove, 'function');
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);// Verifica se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);//Verifica se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]

const myArray = [5, 6, 7, 8];
myRemove(myArray, 5);
assert.deepStrictEqual(myArray, [5, 6, 7, 8]);//Verifica se o array passado por parâmetro não sofreu alterações

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);//Verifica se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado