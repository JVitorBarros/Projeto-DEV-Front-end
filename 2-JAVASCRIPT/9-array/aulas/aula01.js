
//  Exemplo básico

const numeros = [10, 20, 30, 40];
const nomes = [ 'Joao', 'Vitor', 'Maria'];
const misto = ['Texto', 25, true];

//  Acessando elementos

console.log(numeros[2]) // 30
console.log(nomes[0]) //  Joao
console.log(misto[2]) //  true

// Alterando valores

nomes[0] = 'Marcos';
console.log(nomes);

// Tamanho do array

console.log(numeros.length) // 4    
console.log(nomes.length)   // 3        
console.log(misto.length)   // 3

// METODOS BÁSICOS( BEM USADOS )

// push() -> Adiciona no final
// pop() -> Remove do final
// unshift() -> adiciona no começo
// shif() -> remove do começo

numeros.push(4);  // [10, 20, 30, 40, 4]
numeros.pop();    //  [10, 20, 30, 40]
numeros.unshift(0)  // [0, 10, 20, 30, 40]
numeros.shift()     // [10, 20, 30, 40]


