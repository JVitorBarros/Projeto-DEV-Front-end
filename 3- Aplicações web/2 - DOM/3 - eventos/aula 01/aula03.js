const cursos = [...document.querySelectorAll('.curso')]

cursos.map(el => {
    el.addEventListener('click', (evento)=>{
        const destaque = evento.target
        destaque.classList.add('destaque');
    })
});
