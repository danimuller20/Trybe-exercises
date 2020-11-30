function maiorValorIndice(arr) {
  let resultado = 0;
  for(let index in arr) {
   if (arr[resultado] < arr[index]) {
     resultado = index;
   }
  }
  return resultado;
}

console.log(maiorValorIndice([2, 5, 10, 8, 6, 4]));