//Programa que calcula a dedução de imposto de um produto e lança o lucro total de 1000 vedaas desse produto.

let custoProd = 100;
let vendaProd = 200;

let lucroTot = ((vendaProd - custoProd) * 1000) * 0.80;

if (custoProd < 0 || vendaProd < 0) {
  console.log('[ERRO] - Opa! Valor inválido, digite um número acima de 0');
} else {
  console.log(lucroTot)
}
