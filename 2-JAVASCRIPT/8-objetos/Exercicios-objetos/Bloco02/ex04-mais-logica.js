/*
Crie um objeto chamado aluno com:

nome

notas (array com 3 números)

um método media() que retorna a média das notas

um método situacao() que retorna "Aprovado" se a média for >= 7, senão "Reprovado".

*/

const aluno ={
    nome: 'João Vitor',
    notas: [7, 6, 9],
    media(){
        let somaNotas = this.notas.reduce((acumulador, proximoValor)=>acumulador + proximoValor, 0)
        let mediaAluno = somaNotas / this.notas.length
        return mediaAluno;
    },
    situacao(){
        let mediaFinal = this.media()
        if(mediaFinal >= 7){
            return `Parabéns! Você foi aprovado.\nSua média: ${this.media().toFixed(2)}`
        }else{
            return `Que pena! Você foi reprovado.\nSua média: ${this.media().toFixed(2)}`

        }
    }
}
let noticia = aluno.situacao();
console.log(noticia)

