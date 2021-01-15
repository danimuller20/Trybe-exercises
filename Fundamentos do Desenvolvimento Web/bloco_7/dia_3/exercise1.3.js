const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }
  return arr;
}

assert.strictEqual(typeof myRemoveWithoutCopy, 'function');
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]); //Verifica se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]); //Verifica se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]

const myArray = [1, 2, 3];
myRemoveWithoutCopy(myArray, 1);
assert.strictEqual(myArray.length, 2); // Verifica se o array passado por parâmetro sofreu alterações

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]); //Verifica se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado