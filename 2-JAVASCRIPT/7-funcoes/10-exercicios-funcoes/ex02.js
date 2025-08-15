/*
        EXERCICIO02 - maiorNumero
    Crie uma função chamada maiorNumero que recebe dois números e retorna o maior deles.
*/

const entrada = require('prompt-sync')({sigint: true});

const maiorNumero = (num01, num02) =>{
    if(isNaN(num01) || isNaN(num02)){
        return 'número inválido! tente novamente.'
    }else if(num01 > num02){
        return num01;
    }else if(num02 > num01){
        return num02;
    }else{
        return "Números iguais";
    };
};
let n1 = Number(entrada('Digite o primeiro valor: '));
let n2 = Number(entrada('Digite o segundo valor: '));
let resultado = maiorNumero(n1,n2);

console.log(resultado);

