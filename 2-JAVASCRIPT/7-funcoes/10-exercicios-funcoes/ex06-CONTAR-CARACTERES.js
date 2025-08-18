/*
    contarCaracteres
Crie uma função contarCaracteres que recebe uma string e retorna quantos caracteres ela possui.

*/
const entrada = require('prompt-sync')({sigint: true});

const contarCaracteres = (caracteres) =>{
    return caracteres.length;
}

let palavra = entrada('Digite a palavra: ');

if(!palavra.trim()){
    let resultado = contarCaracteres(palavra);
    console.log(`A palavra ${palavra}, possui: ${resultado} caracteres`);
}else{
    console.log('ERRO! Digite apenas letras, não números.');
}
