const divs = [...document.getElementsByTagName('div')];

divs.map(selecionar => {
    selecionar.style.color = 'red';
});