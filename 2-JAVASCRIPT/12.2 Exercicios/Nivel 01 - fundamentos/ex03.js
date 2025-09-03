function retornarNumero(num){
    return new Promise((resolve)=>{
        resolve(num);
    });
}

async function executar(){
    const mensagem = await retornarNumero(42);
    console.log(mensagem);
}

executar();