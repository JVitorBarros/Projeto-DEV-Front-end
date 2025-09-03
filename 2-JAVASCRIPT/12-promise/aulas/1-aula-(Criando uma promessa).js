//  CRIANDO UMA PROMESSA

const promessa = new Promise((resolve, reject) => {
    
    let nome = 'Matheus';

    if(nome === 'Matheus'){
        console.log('Usuário encontrado!');
    }else{
        console.log('Usuário não encontrado');
    }
});

promessa.then((dados) => {
    console.log(dados)
});