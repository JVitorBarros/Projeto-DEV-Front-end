// Seleciona a caixa que contém os cursos
const caixa01 = document.querySelector('#primeira-caixa');

// Seleciona todos os cursos dentro da caixa (retorna NodeList e converte para array)
const todosCursos = [...document.querySelectorAll('.curso')];

// Adiciona evento de clique à caixa inteira
caixa01.addEventListener('click', () => {
    alert('clicou');
});

// Adiciona evento de clique a cada curso individual
// Impede que o clique em um curso propague e acione o clique da caixa
todosCursos.map(curso => {
    curso.addEventListener('click', evento => {
        evento.stopPropagation();
    });
});