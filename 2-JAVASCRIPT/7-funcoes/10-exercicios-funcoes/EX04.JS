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
