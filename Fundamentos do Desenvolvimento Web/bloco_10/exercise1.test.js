const sum = require('./exercise1');

describe('Requisito 1', () => {
  it('O retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toEqual(9);
  });
});

describe('Requisito 2', () => {
  it('O retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });
});

describe('Requisito 3', () => {
  it('A função sum lança um erro quando os parametros são 4 e "5" (string 5)', () => {
    expect(() => sum(4, '5')).toThrow();
  });
});

describe('Requisito 4', () => {
  it('A mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() => sum(4, '5')).toThrowError(new Error('parameters must be numbers'));
  });
});
