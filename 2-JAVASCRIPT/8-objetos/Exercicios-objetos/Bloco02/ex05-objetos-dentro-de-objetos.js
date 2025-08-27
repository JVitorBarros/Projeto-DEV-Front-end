const loja ={
    nome: 'Minha Loja',
    endereço: {
        nome: 'Rua Itaquari',
        numero: 173
    },
    produtos:[
        {
            nome: 'Xbox Series S',
            preço: 2500
        }, 
        {
            nome: 'Xbox Series X',
            preço: 4000
        },
        {
            nome: 'PlaySation 5',
            preço: 4500
        }
    ]
}

console.log(loja.nome);
console.log(`Endereço: ${loja.endereço.nome}`)
console.log(`Nome produto: ${loja.produtos[0].nome}`)
console.log(`Valor: ${loja.produtos[0].preço} R$`)