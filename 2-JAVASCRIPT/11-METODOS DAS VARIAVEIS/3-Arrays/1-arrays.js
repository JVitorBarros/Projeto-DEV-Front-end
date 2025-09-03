//  ARRAYS ([])

let frutas = ["maçã", "banana", "uva"];

console.log(frutas.length); //3
//  Retorna o número de elementos no array.

console.log(frutas.push('pera'));    // Adiciona no fim
//  Adiciona um novo elemento no final do array e retorna o novo tamanho do array.

console.log(frutas.pop());  //  Remove o ultimo.
//  O que faz: Remove o último elemento do array e retorna o elemento removido.

console.log(frutas.shift());    //  Remove o primeiro.
//  Remove o primeiro elemento do array e retorna o elemento removido.

console.log(frutas.unshift('laranja')); //  Adiciona no inicio
//  Adiciona um novo elemento no início do array e retorna o novo tamanho do array.

console.log(frutas.indexOf('uva')); //  2
// Retorna o índice(posição) da primeira ocorrência de um elemento dentro do array. Se o elemento não for encontrado, retorna -1.

console.log(frutas.includes('banana')); //  true
// Verifica se um determinado elemento existe dentro do array, retornando true ou false.

console.log(frutas.join(', ')); //'Laranja, banan, uva'
//  Junta todos os elementos do array em uma string, separados por um delimitador especificado (no caso, ', ').