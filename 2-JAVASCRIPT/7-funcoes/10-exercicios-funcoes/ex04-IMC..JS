/*
    Crie uma função calcularIMC que recebe peso (kg) e altura (m) e retorna o IMC.

    Fórmula: IMC = peso / (altura * altura);
*/

const entrada = require('prompt-sync')({sigint: true});
let peso = Number(entrada('Informe seu peso: '));
let altura = Number(entrada('Informe sua altura: '));


const calcularIMC = (peso, altura) =>{
    return peso / (altura * altura);

}

if(peso <= 0 || altura <= 0){
    console.log('Erro: peso e altura devem ser maiores que 0.');
}else if(isNaN(peso) || isNaN(altura)){
    console.log('Por favor, inserir um valor númerico válido!')
}else{
    let resultado = calcularIMC(peso, altura).toFixed(2);
    console.log(`IMC: ${resultado}`);
}
 
