// MAIOR NUMERO EM UM ARRAY

const numeros = [10, 4, 100, 23, 56];

const maiorNumero = numeros.reduce((maior, numeroAtual)=>{
    return numeroAtual > maior ? numeroAtual : maior;
}, numeros[0])

console.log(maiorNumero);