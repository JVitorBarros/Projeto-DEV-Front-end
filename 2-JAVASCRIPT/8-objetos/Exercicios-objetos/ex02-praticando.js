const livro = {
    titulo: 'Petruz logus e o guardião do tempo',
    autor: 'Augusto Curry',
    ano: 2018
};
console.log(`O livro ${livro.titulo} foi escrito por ${livro.autor} em ${livro.ano}.`)

const cachorro = {
    nome: 'toby',
    idade: 2,
    raca: 'Pitbull',
    latir: function(){
        console.log('Au au!')
    }
}

cachorro.latir();