const promessa = new Promise((resolve, reject) => {
    
    let nome = 'Matheus';

    if(nome === 'Matheus'){
        resolve('Usuário Matheus encontrado!')
    }else{
        reject('Usuário não encontrado');
    }
});

promessa
    .then((dados) => {
        return dados.toLowerCase();
    })
    .then((stringModificada) =>{
        console.log(stringModificada)
    })