
//? Crie uma função que faça requisição para a api dog pictures . Mocke a requisição e crie dois testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess". O segundo deve interpretar que a requisição falhou e ter como valor "request failed". Crie todos os testes que achar necessário.

const api = require('./dogAPI');

describe('testa a requisição pra a API', () => {
  const fetchURL = jest.spyOn(api, 'fetchURL');
  afterEach(fetchURL.mockReset);

  test('testa requisição caso sucesso', async () => {
    fetchURL.mockResolvedValue('request sucess');

    fetchURL();
    expect(fetchURL).toHaveBeenCalled();
    expect(fetchURL).toHaveBeenCalledTimes(1);
    expect(fetchURL()).resolves.toBe('request sucess');
    expect(fetchURL).toHaveBeenCalledTimes(2);
  });

  test('testa requisição caso não haja sucesso', async () => {
    fetchURL.mockRejectedValue('request failed');

    expect(fetchURL).toHaveBeenCalledTimes(0);
    expect(fetchURL()).rejects.toEqual('request failed');
    expect(fetchURL).toHaveBeenCalledTimes(1);
  })

})