//SOURCE: https://www.freecodecamp.org/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/#:~:text=function%20palindrome(str)%20%7B%20var%20re%20%3D%20%2F%5B%5EA,if%20(str%5Bi%5D%20!%3D%3D
function verificaPalindromo(string) {
  string = string.toLowerCase().replace(/[^a-z]+/g,""); //replace([^a-z]/g, '') tira os espaços entre as letras a até z e ignora caractéres.
  for (var index = 0; index < string.length; index += 1){
    if (string[index] !== string[string.length - 1 - index]) {
      return false;
    }
  }
  return true;
}

console.log(verificaPalindromo('socorram me subi, no ônibus em marrocos'));
