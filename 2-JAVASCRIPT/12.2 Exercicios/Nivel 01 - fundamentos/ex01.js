
//  Esperar um tempo

function esperar(ms){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Esperei 2 segundos!");
        }, ms);
    });
}

async function executar(){
    const mensagem = await esperar(2000);
    console.log(mensagem);
}

executar();