/*
    EXERCICIO - dobro 
Crie uma função chamada dobro que recebe um número e retorna o dobro dele.
*/

const entrada = require('prompt-sync')({sigint: true});

const dobro = (num = 0) => num*2;

let numEntrada = Number(entrada('Digite um número: '));

if(isNaN(numEntrada)){
    console.log('Número inválido! Digite novamente.')
}else{
    console.log(`O dobro de ${numEntrada} é: ${dobro(numEntrada)}`);
};


