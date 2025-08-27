const calculadora = {
    somar(a, b){ return a + b},
    subtrair(a, b){return a - b},
    multiplicar(a, b){return a * b},
    dividir(a, b){
        if(b === 0 ){
            return 'Erro: Divisão por zero';
        }else{
            return a / b
        }
    }
}

console.log(calculadora.somar(5, 5))
console.log(calculadora.subtrair(5, 5))
console.log(calculadora.multiplicar(5, 5))
console.log(calculadora.dividir(5, 5))
console.log(calculadora.dividir(0, 5))
console.log(calculadora.dividir(5, 0))
console.log(calculadora.dividir(0, 0))

