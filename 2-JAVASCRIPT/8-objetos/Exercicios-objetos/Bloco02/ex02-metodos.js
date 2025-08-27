<<<<<<< HEAD
const calculadora = {
    somar(a, b){ return a + b },
    subtrair(a, b){ return a - b},
    multiplicar(a, b){return a * b},
    dividir(a, b){ 
        if(a === 0 || b === 0){
            console.log('Erro: divisão por zero');
            return;
        }
            return a / b;
    }
}

const erroDeEntrada = (a, b) =>{
    if(isNaN(calculadora.somar()) || isNaN(calculadora.subtrair()) || isNaN(calculadora.multiplicar()) || isNaN(calculadora.dividir())){
        
    }

}
=======

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
>>>>>>> 109e6bf082d72fda9a1055c4474aade4d3e22b07
