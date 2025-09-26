
//  Chamando o botao para adicionar os cursos
const botaoAdicionar = document.querySelector('#botaoAdicionar');
//  Chamando o botao de remover selecionado
const botaoRemover = document.querySelector('#botaoRemover')
//  Chamando os curso
const todosCursos = [...document.querySelectorAll('.curso')];
//  Chamando a segunda caixa
const segundaCaixa = document.querySelector('#caixa02');
// Chamando a entrada dos nomes cursos
const entradaCurso = document.querySelector('#entradaNomeCurso');


//  Chamando um evento de click no botao adicionar
botaoAdicionar.addEventListener('click', (evento) => {

const nomeCurso = entradaCurso.value.toUpperCase().trim();

// criando uma condição para caso não tenha valor ou valor igual  
if (nomeCurso === '') {
    alert('Insira o curso que deseja adicionar');
} else if (todosCursos.includes(nomeCurso)) {
    alert('O curso já foi adicionado');
} else {
    // Criando nova div para o curso
    const novoDivCurso = document.createElement('div');
    let qtdCurso = todosCursos.length + 1;
    novoDivCurso.setAttribute('id', `c${qtdCurso}`);
    novoDivCurso.setAttribute('class', 'curso c1');

    // Criando label
    const tagEntradaCurso = document.createElement('label');
    tagEntradaCurso.setAttribute('for', nomeCurso);
    tagEntradaCurso.textContent = nomeCurso;

    // Criando input
    const novoInputCurso = document.createElement('input');
    novoInputCurso.setAttribute('type', 'radio');
    novoInputCurso.setAttribute('name', 'curso');
    novoInputCurso.setAttribute('id', nomeCurso);
    novoInputCurso.setAttribute('required', '');

    // Montando a div
    novoDivCurso.appendChild(tagEntradaCurso);
    novoDivCurso.appendChild(novoInputCurso);
    segundaCaixa.appendChild(novoDivCurso);

    // Adicionando o curso ao array
    todosCursos.push(nomeCurso);

    // Limpa o campo de entrada
    entradaCurso.value = '';
}
});

//  Chamando evento de click 
botaoRemover.addEventListener('click', evento =>{
    //  Chamando um array de todos os radios dentro da <div>
    const todosRadios = [...document.querySelectorAll('input[type=radio]')];
    //  Usando o filter para selecionar apenas o radio selecionado
    const radioSelecionado = todosRadios.filter(elemento =>{
        return elemento.checked;
    })
    // percorrendo o array para o radio selecionado
    radioSelecionado.map(elemento =>{
    //  removendo a <div> da caixa pai
    segundaCaixa.removeChild(elemento.parentNode)
    // Criando uma condição para eliminar o curso selecionado do array
    const index = todosCursos.indexOf(elemento.id);
        if(index !== -1){
            todosCursos.splice(index, 1);
        }
    })
});