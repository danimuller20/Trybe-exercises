//Programa que calcula a aliquota referente a cada piso salarial bruto do INSS.

// INSS
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

let salarioBruto = 7000;
let inssDesc = null;
let desconto = null;

if(salarioBruto <= 1556.94) {
  inssDesc = salarioBruto * 0.08;
 } else if (salarioBruto <= 2594.92) {
  inssDesc = salarioBruto * 0.9;
} else if (salarioBruto <= 5189.92) {
  inssDesc = salarioBruto * 0.11;
} else {
   inssDesc = 570.00;
}

desconto = salarioBruto - inssDesc;

console.log(desconto.toFixed(2)); // função que deixa apenas 2 numeros após o .

//Programa que calcula a aliquota e dedução de parcelas de imposto de renda referente a cada piso salarial bruto do IR.

// IR
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

let salarioTot = 5000;
let irDesc = null;
let descIR = null;


if (salarioTot >= 4664.68) {
  irDesc = salarioTot * 0.275 + 869.36
} else if (salarioTot >= 3751.06) {
  irDesc = salarioTot * 0.225 + 636.13;
} else if (salarioTot >= 2826.66) {
  irDesc = salarioTot * 0.15 + 354.80;
} else if (salarioTot >= 1903.99) {
  irDesc = salarioTot * 0.075 + 142.80; 
} else {
  irDesc = 0;
}

descIR = salarioTot - irDesc;

console.log(descIR.toFixed(2));