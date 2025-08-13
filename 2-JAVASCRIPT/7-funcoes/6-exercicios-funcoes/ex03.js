// Calcular a média de 3 números;

const entrada = require('prompt-sync')({sigint: true});

let num1 = Number(entrada('Digite o primeiro número: '));
let num2 = Number(entrada('Digite o segundo número: '));
let num3 = Number(entrada('Digite o terceiro número: '));

const CalacularMedia = (n1, n2, n3)=>{
    let media = (n1 + n2 + n3) / 3;
    return media;
}
let resultadoMedia = CalacularMedia(num1, num2, num3); 
console.log(`A média é: ${resultadoMedia.toFixed(2)} `);