const numeros = [10, 20, 30, 40, 50];

let somaTotal = 0
for(let i = 0; i < numeros.length; i++){
    console.log(`índice: ${i}, valor: ${numeros[i]}`);
    somaTotal += numeros[i];
}
console.log(`A soma do array é: ${somaTotal}`);