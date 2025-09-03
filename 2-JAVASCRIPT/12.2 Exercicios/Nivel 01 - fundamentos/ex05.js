// Verificador de idade

const verificarIdade = (idade) =>{
    return new Promise((resolve, reject) =>{
        if(idade >= 18){
            resolve('Maior de idade!');
        }else{
            reject('Menor de idade!');
        }
    });
};

async function executar(){
    try{
        const mensagem = await verificarIdade(16);
        console.log(mensagem);
    }catch(erro){
        console.log(erro);
    }
}

executar();