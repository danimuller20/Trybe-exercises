const { encode, decode } = require('./exercise2.js');

describe('Requisito 1', () => {
  it('Teste se encode e decode são funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
});

describe('Requisito 2', () => {
  it('Encode: as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5', () => {
    expect(encode('ana')).toBe('1n1');
    expect(encode('eve')).toBe('2v2');
    expect(encode('isis')).toBe('3s3s');
    expect(encode('ovo')).toBe('4v4');
    expect(encode('ubu')).toBe('5b5');
  });
});

describe('Requisito 3', () => {
  it('Decode: os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u', () => {
    expect(decode('1l1n1')).toBe('alana');
    expect(decode('2l2n2')).toBe('elene');
    expect(decode('v3n3')).toBe('vini');
    expect(decode('4lh4')).toBe('olho');
    expect(decode('5b5nt5')).toBe('ubuntu');
  });
});

describe('Requisito 4', () => {
  it('A string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode('Trybe').length).toEqual(5);
    expect(decode('Trybe')).toHaveLength(5);
  });
});
