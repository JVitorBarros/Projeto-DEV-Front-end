const erroProposital = () =>{
    return new Promise((resolve, reject) => {
        reject('Algo deu errado!');
    });
}
async function executar(){
    try{
        const mensagem = await erroProposital()
        console.log(mensagem);
    }catch(erro){
        console.log(erro)
    }
}

executar();