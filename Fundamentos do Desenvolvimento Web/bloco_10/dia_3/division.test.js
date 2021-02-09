//? Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

function generatesRandomNumber () {
  return Math.floor(Math.random() * 100 * 1);
};

test('Testa se a implementação retorna a divisão de dois valores', () => {
  generatesRandomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(generatesRandomNumber(10, 2)).toBe(5);
  expect(generatesRandomNumber).toHaveBeenCalled();
  expect(generatesRandomNumber).toHaveBeenCalledTimes(1);

  expect(generatesRandomNumber(6, 2)).toBe(undefined);
  expect(generatesRandomNumber(30, 3)).not.toBe(10);
  expect(generatesRandomNumber).toHaveBeenCalledTimes(3);
});