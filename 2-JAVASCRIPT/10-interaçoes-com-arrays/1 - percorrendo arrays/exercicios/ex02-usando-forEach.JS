const numeros = [10, 20, 30, 40, 50];

let somaTotal = 0
numeros.forEach((valor, indice)=>{
    console.log(`No índice ${indice} está o valor ${valor}`)
    somaTotal += valor
})


console.log(`A soma total é: ${somaTotal}`);