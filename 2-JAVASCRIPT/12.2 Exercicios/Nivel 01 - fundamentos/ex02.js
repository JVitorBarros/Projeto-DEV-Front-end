function saudacao(){
    return new Promise(resolve => {
        resolve('Olá, mundo!')
    });
}

async function executar(){
    const mensagem = await saudacao();
    console.log(mensagem);
}

executar()