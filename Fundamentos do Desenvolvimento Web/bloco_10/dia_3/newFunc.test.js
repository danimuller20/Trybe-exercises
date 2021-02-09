//? Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.

function generatesRandomNumber () {
  return Math.floor(Math.random() * 100 * 1);
};

test('Muda implementação da função duas vezes', () => {
  generatesRandomNumber = jest.fn()
    .mockImplementation((a, b, c) => a * b * c);

    generatesRandomNumber();
    expect(generatesRandomNumber(1, 2, 3)).toBe(6);
    expect(generatesRandomNumber(2, 5, 10)).toBe(100);
    expect(generatesRandomNumber).toHaveBeenCalled();
    expect(generatesRandomNumber).toHaveBeenCalledTimes(3);

    generatesRandomNumber.mockReset();

    generatesRandomNumber = jest.fn()
      .mockImplementation((a) => a + a);

      generatesRandomNumber();
      expect(generatesRandomNumber(4)).toBe(8);
      expect(generatesRandomNumber).toHaveBeenCalled();
      expect(generatesRandomNumber).toHaveBeenCalledTimes(2);

});