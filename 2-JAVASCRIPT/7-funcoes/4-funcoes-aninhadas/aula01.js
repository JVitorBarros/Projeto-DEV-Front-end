// Funcão dentro de outra função.

const soma = (...valores)=>{
    const somar = val =>{
        let contador = 0;
        for(v of val){
            contador += v;
        }
        return contador
    };    
    return somar(valores);
}

console.log(soma(10,10,10,10,10));