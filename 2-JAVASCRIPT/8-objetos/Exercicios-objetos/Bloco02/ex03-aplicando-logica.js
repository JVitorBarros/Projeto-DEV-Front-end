const contaBancaria  = {
    titular: 'João Vitor',
    saldo: 1000,
    depositar(valor){
       return this.saldo += valor
    },
    sacar(valor){
        return this.saldo -= valor;
    }  
}
let valor = 0;

if(contaBancaria.depositar(valor) <= 0){
    console.log('Não foi possivel realizar o deposito! Deposite um valor acima de 0 R$.');
}else if(contaBancaria.depositar(valor) > 0){
    console.log(`Você depositou um valor de ${valor} R$\n seu saldo atual é: ${contaBancaria.saldo} R$` );
}else if(contaBancaria.sacar(valor) > contaBancaria.saldo){
    console.log('Você não possui saldo suficiente para a realização deste saque');
}else{
    console.log(`Você realizou um saque de ${valor} R$ \nSeu saldo atual é: ${contaBancaria.saldo} R$`);
}

contaBancaria.depositar(valor = 500);
contaBancaria.sacar(valor = 200);
contaBancaria.sacar (valor = 2000);
console.log(contaBancaria.saldo);