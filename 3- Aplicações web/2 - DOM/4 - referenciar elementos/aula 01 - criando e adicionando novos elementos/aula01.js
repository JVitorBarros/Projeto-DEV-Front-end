
// Selecionando a caixa onde estão os cursos 
const caixa = document.querySelector('#primeira-caixa');

// Criando um novo elemento 'div'
const novoElemento = document.createElement('div');

// Adicionando um id a nova div criada
novoElemento.setAttribute('id', 'c7');

//  Adicionado uma class 
novoElemento.setAttribute('class', 'curso c1');

// adicionando um conteúdo
novoElemento.innerHTML = 'ReactNative'

// Inserindo a nova div crianda, dentro da caixa de cursos
caixa.appendChild(novoElemento);