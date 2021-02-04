//? todos os testes entraram no escopo (Scoped / Nested block)

beforeEach(() => console.log('1 - beforeEach')); //? 1º executado; 4º executado; 8º executado;
afterEach(() => console.log('1 - afterEach')); //? 3º executado;

test('', () => console.log('1 - test')); //? 2º executado;

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach')); //? 5º executado;
  afterEach(() => console.log('2 - afterEach')); //? 7º executado;

  test('', () => console.log('2 - test')); //? 6º executado;
});