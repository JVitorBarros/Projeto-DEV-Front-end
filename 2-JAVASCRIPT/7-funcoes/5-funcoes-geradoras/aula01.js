function* cores(){
    yield 'vermelho'
    yield 'verde'
    yield 'azul'
    yield 'preto'
    
}
let itc = cores();
console.log(itc.next().value); // vermelho
console.log(itc.next().value); // verde
console.log(itc.next().value); // azul
console.log(itc.next().value); // preto
console.log(itc.next().value); // underfined
