//  REMOVENDO VALORES FALSOS

const valores = [0, "Texto", null, undefined, false, NaN, "", 42];

const valoresValidos = valores.filter(valor => valor);
console.log(valoresValidos)