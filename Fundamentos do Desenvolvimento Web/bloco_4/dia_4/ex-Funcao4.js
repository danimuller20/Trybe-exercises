function maiorNome (arr) {
  let result = arr[0];
  for (let index in arr) {
    if(result.length < arr[index].length) {
      result = arr[index];
    }
  }
  return result;
}

console.log(maiorNome(['Maria', 'José', 'Aline', 'Fernanda', 'Rodrigo', 'Cloves']));