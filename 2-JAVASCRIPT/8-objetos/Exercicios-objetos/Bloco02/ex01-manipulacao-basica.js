const produto = {
    nome: 'Iphone',
    preco: 6000,
    estoque: 100,
    venda(unidade){
        this.estoque -= unidade;
    },
    aumento(porcentagem){
        let aumentoPorcent = (porcentagem/100) * this.preco
        return this.preco += aumentoPorcent;
    } 
}

produto.venda(2);
produto.aumento(10);
console.log(`Estoque: ${produto.estoque} ${produto.nome} \nPreço com aumento de 10%: ${produto.preco.toFixed(2)} R$`)