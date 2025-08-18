/*
    tabuada
Crie uma função chamada tabuada que recebe um número e imprime a tabuada dele (de 1 a 10).
*/
const entrada = require('prompt-sync')({sigint: true});
let numero = Number(entrada('Informe qual tabuada deseja ver: '));

const tabuada = (num) =>{
    for(let i = 0; i < 11; i++){
        let multiplicador = num * i;
        console.log(`${num} x ${i} = ${multiplicador}`);
    };
};

if(isNaN(numero)){
    console.log('ERRO! digite um número válido.');
}else if(numero <= 0){
    console.log('ERRO! digite um numero maior que zero');
}else{
    tabuada(numero);
}


