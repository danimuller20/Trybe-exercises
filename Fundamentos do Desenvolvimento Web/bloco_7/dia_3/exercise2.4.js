const assert = require('assert');

const findTheNeedle = (words, word) => {
  let result = -1;
  for (let index = 0; index < words.length; index += 1) {
    if (word === words[index]) {
      result = Number(index);
    }
  }
  return result;
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);