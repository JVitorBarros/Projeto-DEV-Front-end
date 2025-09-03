const promessa = new Promise((resolve, reject) => {
    
    let nome = 'João';

    if(nome === 'Matheus'){
        resolve('Usuário Matheus encontrado!')
    }else{
        reject('Matheus não encontrado');
    }
});

promessa
    .then((dados)=>{
        console.log(dados);
    })
    .catch((erro)=>{
        console.log(`Aconteceu um erro: ${erro}`)
    })