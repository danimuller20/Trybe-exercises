# (HOF) Higher Order Functions === Funções de ordem superior

### a maioria das HOF pode receber até dois parâmetros, sendo ela uma outra função (callback() =>)[Obrigatório], onde dentro dessa função são aceitos de 1 até 3 parâmetros, e outro opcioal (thisArg), alor a ser usado como this ao executar o retorno de chamada.

### Dentro da callback
#### item: O item atual que está sendo processado no array
#### index: O índice do elemento atualmente sendo processado no array.
#### array: O array sobre o qual forEach foi chamado.

# Atenção!!! a regra acima não se aplica as seguntes funções HOF:

## array.sort(funçãoDeComparação) =>)
_[Documentação sort](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)_

A função sort permite ordenar um array de acordo com algum critério estabelecido.
A função de comparação é opcional, porém, para ordenar um array de números é necessário implementar uma função, ex: array.sort((a, b) => a - b);

## array.reduce(callback(accumulator, currentValue, index, array), 0)
_[Documentação reduce](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)_

A função reduce recebe dois parâmetros, a callback e o accumulador, ex: array.reduce(callback(), 0), sendo opcional o uso do segundo parametro para setar um valor inicial para o accumulador, caso não seja usado o segundo parâmetro o valor acumulador vai iniciar com o primeiro indice do array.


# Se aplica as funções HOF abaixo:

## array.forEach(callback(item, index, array) =>)

O forEach percorre o array e executa a função passada para cada um dos seus valores. O forEach não retorna nenhum valor.
_[Documentação forEach](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)_

## array.find(callback(item, index, array) =>)

A função find é utilizada para achar o primeiro elemento que satisfaça a condição passada. Ela retorna (true or false).
_[Documentação find](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find)_

## array.some(callback(item, index, array) =>)
_[Documentação some](https://developer.cdn.mozilla.net/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/some)_

A função some retorna true se ao menos um elemento de um array satisfaz a uma condição.

## array.every(callback(item, index, array) =>)
_[Documentação every](https://developer.cdn.mozilla.net/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every)_

A função every retorna true se todos os elementos de um array satisfazem a uma condição.

## array.filter(callback(item, index, array) =>)
_[Documentação filter](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filtro)_

A função filter retorna um novo array com os elementos que passaram no teste.

## array.map(callback(valorAtual, index, array) =>)
_[Documentação map](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map)_

A função map mapeia os elementos de um array para um novo array com o resultado de uma função aplicado a cada elemento.


# spread operator, parâmetro rest, object destructuring, array destructuring, default destructuring, abbreviation object literal, default params.

### spread operator:
_[Documentação spread operator](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_operator)_

#### exemplo de uso:
const primavera = ['OUT', 'NOV', 'DEZ'];
const verao = ['JAN', 'FEV', 'MAR'];
const outono = ['ABR', 'MAI', 'JUN'];
const inverno = ['JUL', 'AGO', 'SET'];

const meses = [...verao, ...outono, ...inverno, ...primavera];
console.log(meses); /* [
  'JAN', 'FEV', 'MAR',
  'ABR', 'MAI', 'JUN',
  'JUL', 'AGO', 'SET',
  'OUT', 'NOV', 'DEZ'
] */

o spread operator une várias arrays em um unico array, ou vários objetos em um único objeto.

## parâmetro rest:
_[Documentação spread operator](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/rest_parameters)_

#### exemplo de uso:
function fun1(...theArgs) {
  console.log(theArgs.length);
}

fun1();  // 0
fun1(5); // 1
fun1(5, 6, 7); // 3


