/*switch
Quando temos muitos casos fixos para comparar, o switch fica mais limpo que vários else if.*/

let cor = "vermelho";

switch (cor) {
  case "azul":
    console.log("Você escolheu azul");
    break;
  case "vermelho":
    console.log("Você escolheu vermelho");
    break;
  default:
    console.log("Cor não reconhecida");
}
/*📌 Sempre colocar break, senão o código “cai” no próximo caso.*/