const biblioteca ={
    livros:[
        {
            titulo: 'Era uma vez',
            autor: 'Fulano de tal',
            disponivel: true
        },
        {
            titulo: 'Petrus Logus',
            autor: 'Augusto Cury',
            disponivel: false
        },
        {
            titulo: 'Uma historia real',
            autor: 'sicrano',
            disponivel: false
        }
    ],
    emprestar(titulo){
       for(let livro of this.livros){
        if(livro.titulo === titulo ){
            if(livro.disponivel){
                livro.disponivel = false;
                console.log(`Você emprestou ${livro.titulo}`)
            }else{
                console.log(`O livro ${livro.titulo} não está disponivel`)
            }
            return;
        }
       }
       console.log(`O livro ${titulo} não foi encontrado na biblioteca`)
    },
    devolver(titulo){
        for(let livro of this.livros){
            if(livro.titulo === titulo){
                if(livro.disponivel === false){
                    livro.disponivel = true
                    console.log(`Você devolveu o Livro ${livro.titulo}!`)
                }else{
                    console.log(`O livro ${livro.titulo} já se encontra na biblioteca`)
                }
                return;
            }
        }
        console.log(`O livro ${titulo} não pertence a biblioteca!`)
    }
}
biblioteca.emprestar('Era uma vez')
biblioteca.emprestar('Petrus Logus')
biblioteca.emprestar('Era uma vez')
biblioteca.devolver('Petrus Logus')
biblioteca.devolver('Era uma vez')
biblioteca.devolver('Era uma vez')
biblioteca.emprestar('Hobbit')
biblioteca.devolver('Hobbit')

