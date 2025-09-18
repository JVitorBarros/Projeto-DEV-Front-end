
// Chamando a entrada de curso
const entradaCurso = document.querySelector('#entradaNomeCurso');
//  Chamando o botao para adicionar os cursos
const botaoAdicionar = document.querySelector('#botaoAdicionar');
//  Chamando os curso
const todosCursos = [...document.querySelectorAll('.curso')];
//  Chamando a segunda caixa
const segundaCaixa = document.querySelector('#caixa02');


//  Chamando um evento de click no botao adicionar
    botaoAdicionar.addEventListener('click', (evento)=>{
        const novoCurso = document.createElement('div');
        const 
        let quantidadeCurso = ++todosCursos.length;
        novoCurso.setAttribute('id', `c${quantidadeCurso}` );
        novoCurso.setAttribute('class', 'curso c1');
        

        segundaCaixa.appendChild(novoCurso)
    
});    

