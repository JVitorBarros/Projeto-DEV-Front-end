/*
    O QUE É reduce()

    O reduce() é um método de arrays em JavaScript usado para 'reduzir' todos os elementos de um array a um unico valor(como número, string, objeto etc.)

*/

/*
    COMO FUNCIONA O reduce()?

    Ele recebe uma função de callback e um valor inicial(opcional). Essa função de callback é executada para cada item do array, acumulando um resultado.

    array.reduce((acumulador, valorAtual, indice, array) => {
    //  Lógica
    }, valorInicial);

    * acumulador: valor acumulado até o momento
    * valorAtual: o item atual do array sendo processado.
    * indice: indici atual(opcional).
    * array: o array original(opcional)
    * valorInicical: valor inicial do acumulador(opcional, mas recomendado). 


*/

const numeros = [1, 2, 3, 4, 5];

const soma = numeros.reduce((acumulador, valorAtual) =>{
    return acumulador + valorAtual;
}, 0);

console.log(soma); // Saída: 15

/*

    POR QUE USAR O reduce()

    * É poderoso e flexivel: permite transformar arrays em qualquer coisa.
    * Substitui loops for em muitos casos com menos código e mais clareza.
    * Pode ser usado para somar, multiplicar, agrupar, contar, converter e etc.
    
*/

//  OUTROS EXEMPLOS ÚTEIS

//  multiplicação de todos os numeros:

const numerosExemplo02 = [2, 3, 4];

const multiplicar = numerosExemplo02.reduce((acumulador, valorAtual) =>{
    return acumulador * valorAtual
}, 1);

console.log(multiplicar);   //  Sáida: 24

// Contar quantas vezez cada item aparece

const frutas = ['maçã', 'banana', 'maçã', 'laranja', 'banana'];

const contagem = frutas.reduce((acumulador, fruta)=>{
    acumulador[fruta] = (acumulador[fruta] || 0) + 1;
    return acumulador;
}, {})

console.log(contagem);
//  Saída: {maçã: 2, banana: 2, laranja: 1}

