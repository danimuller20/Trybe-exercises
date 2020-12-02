function somaNumero(numero) {
  let resultado = 0;

  for (let index = 0; index <= numero; index += 1) {
    resultado += index;
  }
  return resultado;
}

console.log(somaNumero(20))