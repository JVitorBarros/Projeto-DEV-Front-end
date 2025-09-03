
//  STRING( 'texto')

let nome = 'João Vitor';

console.log(nome.length);     //  Tamanho -> 10
// Retorna o número de caracteres da string, incluindo espaços e caracteres especiais.

console.log(nome.toUpperCase) // 'JOAO VITOR'
// Converte todas string para letras maiusculas.

console.log(nome.toLowerCase) // 'joao vitor'
//  Converte todas string para letras minusculas

console.log(nome.includes('Vitor')) //  true
//  Verifica se a string contém a substring especificada e retorna true ou false.

console.log(nome.indexOf('Vitor'))  // 5
//  Retorna o indice da primeira ocorrencia da substring dentro da string. Caso não encontre, retorna -1.

console.log(slice(0, 4));   //  'João
//  Extrai uma parte da string, començando no indice inical (0) até o indice final (4), mas não inlcui o indice final.

console.log(nome.replace('Vitor', 'Silva'));  // 'João Silva'
//  Substitui a primeira ocorrencia  de uma string por outra. (Se houver mais de uma ocorrencia, voce pode usar uma expressão regular ou metodo 'replaceAll para substituir todas.)