// USANDO for

console.log('USANDO for')
const numeros = [10, 20, 30];

for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i])
}

// USANDO for...of

console.log('USANDO for...of')

for(num of numeros){
    console.log(num)
}

//  USANDO forEach

console.log('Usando forEach');

numeros.forEach(function(num){
    console.log(num)
})


/*

👉 Resumindo:

Se precisa de controle total → use for.

Se só importa o valor → use for...of.

Se quer código mais limpo/moderno → use forEach.

*/