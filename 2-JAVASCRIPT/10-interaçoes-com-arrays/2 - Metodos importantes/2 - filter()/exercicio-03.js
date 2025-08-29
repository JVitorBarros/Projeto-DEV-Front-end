const produtos = [
    {nome: 'Camiseta', preço: 50, disponivel: true},
    {nome: 'Calça', preço: 150, disponivel: false},
    { nome: "Tênis", preço: 200, disponivel: true },
    { nome: "Jaqueta", preço: 120, disponivel: true },
    { nome: "Boné", preço: 40, disponivel: true }
]

const baratoDisponiveis = produtos.filter(produto =>{ return produto.preço < 100 && produto.disponivel === true})
console.log(baratoDisponiveis)