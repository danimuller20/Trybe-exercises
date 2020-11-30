function menorValorIndice(arr) {
  let resultado = 0;
  for(index in arr) {
    if(arr[index] < arr[resultado]) {
      resultado = index;
    }
  }
  return resultado;
}

console.log(menorValorIndice([10, 5, 9, -20, 6]));