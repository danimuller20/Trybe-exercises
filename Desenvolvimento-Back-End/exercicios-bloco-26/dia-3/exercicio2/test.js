const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');

const writeText = require('./index');
describe('Testa a função "createText', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    sinon.stub(() => {
      fs.writeFileSync.restore();
    });
  });

  describe('Após concluir a escrita do arquivo', () => {
    it('deverá retornar um "ok"', () => {
      const result = writeText('/arquivo.txt', 'Vamo que vamo!');
      expect(result).to.be.equal('ok');
    });
    
    it('o output deve ser uma string', () => {
      const result = writeText('/arquivo.txt', 'Vamo que vamo!');
      expect(result).to.be.a('string');
    });
  });
});
