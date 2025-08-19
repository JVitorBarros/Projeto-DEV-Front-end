const contaBancaria  = {
    titular: 'João Vitor',
    saldo: 1000,
    depositar(valor){ return this.saldo += valor},
    sacar(valor){
        if(valor > this.saldo){
            console.log('Você não possui saldo suficiente. Tente novamente')
        }else{
            return this.saldo -
        }
    }
}

console.log(contaBancaria.depositar(50));