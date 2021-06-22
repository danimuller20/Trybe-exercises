const { expect } = require('chai');

const verifyNumbers = require('./index');

describe('Testa a função "verifyNumbers', () => {
  describe('Quando o número passado for maior que 0', () => {
    it('deverá retornar "positivo"', () => {
      const response = verifyNumbers(5);
  
      expect(response).to.be.equal('positivo');
    });
    it('output deverá ser uma string', () => {
      const response = verifyNumbers(5);
      expect(response).to.be.a('string');
    });
  });
  
  describe('Quando o número passado for menor que 0', () => {
    it('deverá retornar "negativo"', () => {
      const response = verifyNumbers(-3);
  
      expect(response).to.be.equal('negativo');
    });
    it('output deverá ser uma string', () => {
      const response = verifyNumbers(5);
      expect(response).to.be.a('string');
    });
  });
  
  describe('Quando o número passado for igual a 0', () => {
    it('deverá retornar "neutro"', () => {
      const response = verifyNumbers(0);
  
      expect(response).to.be.equal('neutro');
    });
    it('output deverá ser uma string', () => {
      const response = verifyNumbers(5);
      expect(response).to.be.a('string');
    });
  });
  
  describe('Caso parâmetro informado não seja do tipo Number', () => {
    it('deverá retornar "o valor deve ser um número"', () => {
      const response = verifyNumbers('str');
  
      expect(response).to.be.equal('o valor deve ser um número');
    });
    it('output deverá ser uma string', () => {
      const response = verifyNumbers(5);
      expect(response).to.be.a('string');
    });
  });
});
