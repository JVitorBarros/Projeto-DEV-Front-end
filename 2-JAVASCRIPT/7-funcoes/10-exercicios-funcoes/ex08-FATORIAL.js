/*
    fatorial
Crie uma função fatorial que recebe um número e retorna o fatorial dele.
Exemplo: 5! = 5 * 4 * 3 * 2 * 1 = 120

*/
const entrada = require('prompt-sync')({sigint:true});

const fatorial = (num) => {
    let acumulador = 1 ;
    for(num; num > 0; num--){
        acumulador *= num
    }
    return acumulador;
}

let numero = Number(entrada('Digite um valor númerico: '));

if(isNaN(numero)){
    console.log('ERRO! Caracteres e simbolos não são permitidos. Tente novamente.')
}else if(numero <= 0){
    console.log('ERRO! Digite um valor que seja maior que zero.');
}else{
    let resultado = fatorial(numero);
    console.log(`${numero}!`)
    for(numero; numero > 0; numero--){
        console.log(`${numero} * `);
    }
    console.log(resultado);
}

