//? Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.

const stringFunction = require('./threeFunctions.js');

jest.mock('./threeFunctions');

test('toUpperCase para toLowercase', () => {

  stringFunction.toUpperCaseString.mockImplementation((string) => string.toLowerCase());

  expect(stringFunction.toUpperCaseString('DaniElA')).toEqual('daniela');
  expect(stringFunction.toUpperCaseString).toHaveBeenCalled();
  expect(stringFunction.toUpperCaseString).toHaveBeenCalledTimes(1);

});

test('Da primeira letra para a última letra da string', () => {

  stringFunction.firstLetter.mockImplementation((string) => {
    const length = string.length -1;
    return string.charAt(length);
  });

  expect(stringFunction.firstLetter('Daniela')).toEqual('a');
  expect(stringFunction.firstLetter).toHaveBeenCalled();
  expect(stringFunction.firstLetter).toHaveBeenCalledTimes(1);
});

test('Concatena três strings', () => {

  stringFunction.concatStrings.mockImplementation((string1, string2, string3) => 
    `${string1} ${string2} ${string3}`);

    expect(stringFunction.concatStrings('vai', 'que', 'vai')).toEqual('vai que vai');
    expect(stringFunction.concatStrings).toHaveBeenCalled();
    expect(stringFunction.concatStrings).toHaveBeenCalledTimes(1);
});