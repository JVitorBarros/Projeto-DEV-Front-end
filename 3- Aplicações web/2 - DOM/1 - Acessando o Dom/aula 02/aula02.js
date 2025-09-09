const divs = document.getElementsByTagName('div');

[...divs].map(elemento => {
    elemento.style.color = 'red'
    console.log(elemento);
});