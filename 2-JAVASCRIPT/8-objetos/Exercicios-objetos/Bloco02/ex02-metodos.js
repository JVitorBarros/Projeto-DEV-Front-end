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
