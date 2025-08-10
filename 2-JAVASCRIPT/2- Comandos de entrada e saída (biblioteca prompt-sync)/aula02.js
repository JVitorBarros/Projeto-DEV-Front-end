// Maior numero 

const prompt = require('prompt-sync')({sigint: true});

let n1 = Number(prompt('Digite um valor: '));
let n2 = Number(prompt('Digite outro valor: '));

if(n1 > n2){
    console.log(`O maior número é: ${n1}`);
}else{
    console.log(`O maior número é: ${n2}`);
};