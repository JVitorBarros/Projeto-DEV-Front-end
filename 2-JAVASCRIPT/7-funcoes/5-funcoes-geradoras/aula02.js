const entrada = require('prompt-sync')({sigint: true});
let nContagem = Number(entrada('informe até onde ira a contagem: '));

function* contador(){
    let i=0;
    while(true){
        yield i++
    }
}

const itc = contador();
for(let i=0; i < nContagem+1 ; i++){
    console.log(itc.next().value);
}


