function encode(string) {
  let vowel = string.split('');
  for (let index = 0; index < vowel.length; index += 1) {
    let volwes = vowel[index]
    switch (volwes) {
      case ' ':
        break;
      case 'a':
        vowel[index] = '1';
        break;
      case 'e':
        vowel[index] = '2';
        break;
      case 'i':
        vowel[index] = '3';
        break;
      case 'o':
        vowel[index] = '4';
        break;
      case 'u':
        vowel[index] = '5';
        break;
    }
  }
  return vowel.join('');
}
let vowelString = 'hi there!';
console.log(encode(vowelString));

function decode(string) {
  let vowelAndNumbers = string.split('');
  for (let index = 0; index < vowelAndNumbers.length; index += 1) {
    let numbers = vowelAndNumbers[index]
    switch (numbers) {
      case ' ':
        break;
      case '1':
        vowelAndNumbers[index] = 'a';
        break;
      case '2':
        vowelAndNumbers[index] = 'e';
        break;
      case '3':
        vowelAndNumbers[index] = 'i';
        break;
      case '4':
        vowelAndNumbers[index] = 'o';
        break;
      case '5':
        vowelAndNumbers[index] = 'u';
        break;
    }
  }
  return vowelAndNumbers.join('');
}
let numberString = 'h3 th2r2!';
console.log(decode(numberString));

module.exports = {
  encode,
  decode
}
