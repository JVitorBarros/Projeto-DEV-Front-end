// Verificar se um numero é par

let numPar = (n) =>{
    if(n % 2 === 0){
        return `${n} é par`;
    }else{
        return `${n} não é par`
    }
}
console.log(numPar(3));