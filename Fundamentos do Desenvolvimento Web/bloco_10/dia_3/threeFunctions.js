//? Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. 

function toUpperCaseString(string) {
  return string.toUpperCase();
}

function firstLetter(string) {
  return string.charAt(0);
}

function concatStrings(string1, string2) {
  return `${string1} ${string2}`;
}

module.exports = {toUpperCaseString, firstLetter, concatStrings};