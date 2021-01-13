const longestWord = text => {
  let word = '';
  const words = text.split(' ')
  for (let index = 0; index < words.length; index += 1) {
    if (word.length < words[index].length) {
      word = words[index];
    }
  }
  return word;
}
console.log(longestWord('Olá, pessoas. como vai?'));
