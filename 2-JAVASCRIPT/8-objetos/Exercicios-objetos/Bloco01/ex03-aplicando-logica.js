const contaBancaria  = {
    titular: 'João Vitor',
    saldo: 1000,
    depositar(valor){
        if(valor <= 0){
            console.log('Valor inválido! Permitido valores acima de zero.');
            return;
        }
            this.saldo += valor;
            console.log(`Você depositou ${valor} R$. Seu saldo atual é de ${this.saldo} R$`);
        
    },
    sacar(valor) {
        if (valor <= 0) {
            console.log('O valor de saque deve ser maior que zero.');
            return;
        }if (valor > this.saldo) {
            console.log(`Saldo insuficiente. Seu saldo é R$${this.saldo}.`);
            return;
        }
            this.saldo -= valor;
            console.log( `Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
    }
}

contaBancaria.depositar(500);  // +500
contaBancaria.sacar(200);      // -200
contaBancaria.sacar(2000);     // não vai permitir

console.log(`💰 Saldo final: R$${contaBancaria.saldo}`);