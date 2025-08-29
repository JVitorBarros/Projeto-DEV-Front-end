const palavras = ["Ana", "Carlos", "Alice", "banana", "abacaxi", "Arroz"];

const iniciandoComLetraA = palavras.filter(letra => letra[0].toLowerCase() === 'a');
console.log(iniciandoComLetraA)