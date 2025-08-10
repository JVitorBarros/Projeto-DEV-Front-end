// Saudação personalizada

const prompt = require('prompt-sync')({sigint: true});
let nome = prompt('Digite seu nome: ');
let idade = Number(prompt('Digite sua idade: '));

let saudacao = `Olá, ${nome}!\nVocê tem ${idade} anos.`

console.log(saudacao);