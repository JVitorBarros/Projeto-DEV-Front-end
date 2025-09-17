
//  Selecionando a caixa onde será inserido os cursos
const caixaCursos = document.querySelector('.caixas');

// Curso que serão inseridos na caixa curso
const cursos = ['HTML', 'CSS', 'JavaScript', 'React', 'PHP', 'MySQL'];

// Usando o metodo map, vamos percorrer cada curso dentro do array
cursos.map((elemento, posicao) =>{
    
    /*  INICIANDO A INTRODUÇÃO DAS <div> NA CAIXA CURSO */

    //  Criando uma nova div, para que todo curso tenha uma <div>
    const novoElemento = document.createElement('div');

    //  Insere uma id em cada curso
    novoElemento.setAttribute('id', `c${posicao}`);

    // Adiciona classes CSS para estilização
    novoElemento.setAttribute('class', 'curso c1');

    // Insere o nome do curso como conteúdo da <div>
    novoElemento.innerHTML = elemento

    // Adicioando um evento de click nas <div>
    novoElemento.addEventListener('click', (evento =>{

        //Removendo a div que for clicada da caixa de cursos
        caixaCursos.removeChild(evento.target);

    }));

    /*  FIM DA INTRODUÇÃO DAS <div> */

    /*  INICIANDO A INTRODUÇÃO DE "botão lixeira" NAS <div>*/
    
    //  criando um elemento <img>, para todos cursos
    const botaoLixeira = document.createElement('img');

    botaoLixeira.setAttribute('src', 'imagem/icon_lixeira_menor.png')



    /*  FIM INTRODUÇÃO "botão lixeira" */

    // Adiciona a div criada ao container principal
    caixaCursos.appendChild(novoElemento)
    
    //  Adicionando a tag <img> criada dentro de cada <div>
    novoElemento.appendChild(botaoLixeira);
});


