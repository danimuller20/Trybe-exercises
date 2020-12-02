function inteiroMaisRepetido(inteiros) {
  let emOrdem = inteiros.slice().sort();
  let repetidoMaisX = [];
  
  for (let index = 0; index < emOrdem.length -1; index += 1) {
    if(emOrdem[index + 1] === emOrdem[index]) {
      repetidoMaisX.push(emOrdem[index])
    }
    
  }
  
  let ordenados = repetidoMaisX.slice().sort();
  let unico = [];

  for (let indice = 0; indice < ordenados.length -1; indice += 1) {
    if(ordenados[indice + 1] === ordenados[indice]) {
      unico.push(ordenados[indice]);
    }
  }
  return unico;
}

console.log(inteiroMaisRepetido([2, 3, 2, 5, 8, 2, 3]));