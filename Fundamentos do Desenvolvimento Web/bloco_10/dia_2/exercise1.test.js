const uppercase = require('./exercice1.js');

test('Verifica a chamada callback da função uppercase', done => {
  uppercase('test', result => {
    expect(result).toBe('TEST');
    done();
  });
});