//  NUMBERS (123)

let num = 10.567

console.log(num.toFixed(2));    // '10.57' (2 casas decimais)
// Formata o número com um número especifico de casas decimais. O valor é arredondado.

console.log(num.toString());      // '10.567'
//  Converte o número em uma string.

console.log(Number.isInteger(num)); //  false
//  Verifica se o valor é um valor inteiro.

console.log(parseInt('20')); // 20
//  Converte uma string para numero inteiro.

console.log(parseFloat('20.5')) // 20.5
//  Converte uma string para um número de ponto flutuante (número decimal).