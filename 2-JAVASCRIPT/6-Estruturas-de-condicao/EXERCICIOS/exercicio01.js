// 1. Pergunte ao usuário (prompt) a hora atual (0 a 23)
// 2. Se estiver entre 6 e 11, diga "Bom dia"
// 3. Entre 12 e 17, diga "Boa tarde"
// 4. Entre 18 e 23, diga "Boa noite"
// 5. Entre 0 e 5, diga "Boa madrugada"

const entrada = require('prompt-sync')({sigint: true});

let qualHorario = Number(entrada('Qual o horário atual?: '));

if(qualHorario >= 6 && qualHorario <= 11 ){
    console.log('Bom dia!');
}else if(qualHorario >= 12 && qualHorario <= 17){
    console.log('Boa tarde!');
}else if(qualHorario >= 18 && qualHorario <= 23){
    console.log('Boa noite!');
}else if(qualHorario >= 0 && qualHorario <= 5){
    console.log('Boa madrugada!');
}else{
    console.log('Horário inválido!');
};