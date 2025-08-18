/*
    Crie uma função inverterString que recebe uma string e retorna ela invertida.
    Exemplo: "JavaScript" → "tpircSavaJ"
*/


const entrada = require('prompt-sync')({sigint: true});

const inverterString = (string) => string.split('').reverse().join(''); 

let palavra = entrada('Digite uma palavra: ').trim();
let apenasLetras = /^[A-Za-zÀ-ÿ]+$/


if(!palavra){
    console.log('ERRO! Entrada inválida(Não pode ser vazio). Tente Novamente');
}else if(!apenasLetras.test(palavra)){
    console.log('ERRO! Números e símbolos não são permitidos. Tente novamente')
}else{
    let resultado = inverterString(palavra); 
    console.log(resultado);
}
