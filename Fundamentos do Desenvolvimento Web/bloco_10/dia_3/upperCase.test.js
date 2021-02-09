//? Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.

const upper = require('./threeFunctions');

test('Muda a implementação do teste e depois restaura', () => {
  const toUpper = jest
    .spyOn(upper, 'toUpperCaseString')
    .mockImplementation((string) => string.toLowerCase());

  expect(toUpper('DaniElA')).toEqual('daniela');
  expect(toUpper).toHaveBeenCalled();
  expect(toUpper).toHaveBeenCalledTimes(1);

  upper.toUpperCaseString.mockRestore();
  
  expect(upper.toUpperCaseString('lowercase')).toBe('LOWERCASE');
});