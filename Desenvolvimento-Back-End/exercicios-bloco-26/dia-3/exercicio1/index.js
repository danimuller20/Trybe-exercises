function verifyNumbers(number) {
  if (number > 0) {
    return 'positivo';
  }
  if (number < 0) {
    return 'negativo';
  }
  if (number === 0) {
    return 'neutro';
  }
  if (number !== 'number') {
    return 'o valor deve ser um número';
  }
}

module.exports = verifyNumbers;