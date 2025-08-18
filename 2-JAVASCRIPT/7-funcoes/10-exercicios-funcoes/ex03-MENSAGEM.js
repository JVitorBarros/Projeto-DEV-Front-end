/*
    mensagemDeBoasVindas
Crie uma função mensagemDeBoasVindas que recebe o nome de uma pessoa e sua idade.

*/
const entrada = require('prompt-sync')({sigint: true});
let nome = entrada('Digite seu nome: ').trim();
let idade = Number(entrada('Digite sua idade: '));

const mensagemDeBoasVindas = (nome, idade) =>{
    return `Bem-vindo ${nome}! Você tem ${idade} anos.`
}

if(!nome || !isNaN(nome)){
    console.log('Nome inválido! Tente novamente.');
}else if(isNaN(idade) || idade < 0 || !idade){
    console.log('Idade iválida! Tente novamente');
}else{
    console.log(mensagemDeBoasVindas(nome, idade));
};