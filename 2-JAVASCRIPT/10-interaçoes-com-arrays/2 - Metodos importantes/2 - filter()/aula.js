/*
    FILTER()

    O filter() é um método de array em JavaScript que cria um novo array contendo somente os elementos do array original que atendem a uma condição específica.

    A ESTRUTURA BÁSICA DO filter()

    let novoArray = array.filter(funcaoDeCondicao);

    * array: O array origina, de onde você quer tirar os itens.
    * funcaoDeCondicao: A função que vai decidir quais elementos vão para o novo array.
    

*/

    // EXEMPLO BÁSICO

const numeros = [5, 12, 8, 130, 44];

const numerosGrandes = numeros.filter(numero =>{ return numero > 10});

console.log(numerosGrandes)

/*
    COMO ISSO PODE SER UTIL?

    Esse tipo de filtro pode ser super util quando você tem uma lista grande de dados e precisa encontrar apenas os que atendem a certos critérios.

*/
/* 
      FILTRANDO VALORES '''''FALSY'''''

    Você pode usar o filter() para remover valores "falsy" do array. Em JavaScript, valores como false, null, undefined, 0, NaN e "" são considerados "falsy".

*/

const dados = [0, 1, null, undefined, "texto", "", NaN, 3, false];

// O filter vai remover os valores "falsy"
const dadosValidos = dados.filter(function(item) {
  return item; // Só retorna true para valores "truthy"
});

console.log(dadosValidos); // Resultado: [1, "texto", 3]