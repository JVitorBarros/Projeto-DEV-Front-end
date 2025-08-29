// Maiores de 18 anos 

const pessoas = [
  { nome: "Ana", idade: 17 },
  { nome: "Carlos", idade: 22 },
  { nome: "Maria", idade: 19 },
  { nome: "João", idade: 16 }
];

const maioresDe18 = pessoas.filter(pessoa => pessoa.idade >= 18);

console.log(maioresDe18);