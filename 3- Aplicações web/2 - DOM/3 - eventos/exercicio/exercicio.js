const caixa01 = document.querySelector('#primeira-caixa');
const caixa02 = document.querySelector('#segunda-caixa');
const cursos = [...document.querySelectorAll('.curso')];
const botaoTranferencia = document.querySelector('#botao-transferir');

cursos.map(el =>{
    el.addEventListener('click', (evento)=>{
        const curso = evento.target
        curso.classList.toggle('destaque')
    });
});

botaoTranferencia.addEventListener('click', (evento)=>{
    const cursosSelecionados = [...document.querySelectorAll('.destaque')];
    const cursosNaoSelecionados = [...document.querySelectorAll('.curso:not(.destaque)')];

    cursosSelecionados.map(el =>{
        caixa02.appendChild(el);
    });
    
    cursosNaoSelecionados.map(el =>{
        caixa01.appendChild(el);
    });

})
