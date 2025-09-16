
//  Selecionando a caixa onde será inserido os cursos
const caixaCursos = document.querySelector('.caixas');

// Curso que serão inseridos na caixa curso
const cursos = ['HTML', 'CSS', 'JavaScript', 'React', 'PHP', 'MySQL'];

// Usando o metodo map, vamos percorrer cada curso dentro do array
cursos.map((elemento, posicao) =>{
    
    //  Criando uma nova div, para que todo curso tenha uma div
    const novoElemento = document.createElement('div');

    //  Inserindo uma id em cada curso
    novoElemento.setAttribute('id', `c${posicao}`);

    // Adiciona classes CSS para estilização
    novoElemento.setAttribute('class', 'curso c1');

    // Insere o nome do curso como conteúdo da div
    novoElemento.innerHTML = elemento

    // Adiciona a div criada ao container principal
    caixaCursos.appendChild(novoElemento)
});