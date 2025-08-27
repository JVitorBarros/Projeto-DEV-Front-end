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
        if(titulo.disponivel === true){

        }
    }
}
console.log(biblioteca.emprestar('era uma vez'))