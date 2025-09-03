const primeira = () => {
    return new Promise((resolve) => {
        resolve('Primeira');
    })
}; 
const segunda = () => {
    return new Promise((resolve) => {
        resolve('Segunda');
    })
}; 
const terceira = () => {
    return new Promise((resolve) => {
        resolve('Terceira');
    })
}; 

async function executarTudo(){
    const funcoesAll = await Promise.all([primeira(), segunda(), terceira()])
    console.log(funcoesAll)
}

executarTudo()