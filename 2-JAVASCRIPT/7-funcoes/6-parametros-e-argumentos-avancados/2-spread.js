const soma = (a,b,c)=>{
    return a + b + c;
}

const numeros = [1,2,3];

console.log(soma(...numeros));

/*
Explicação:

A função soma espera 3 parâmetros.

Usamos '...numeros' para espalhar os elementos do array como se fossem argumentos individuais:
*/
