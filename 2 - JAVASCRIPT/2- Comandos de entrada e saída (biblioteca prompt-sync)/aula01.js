const prompt = require('prompt-sync')({sigint: true});

let nome = prompt('Digite seu nome: ');
let idade = Number(prompt('Digite sua idade: '));

console.log(`Nome: ${nome} \nIdade: ${idade}`);