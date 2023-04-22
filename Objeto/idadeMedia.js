let anoAtual = 2023;
let minhaIdade = 25;
let idadePessoaEsquerda = 30;
let idadePessoaDireita = 20;


function pularLinha() {
  console.log("<br>");
}


console.log("Eu nasci em " + (anoAtual - minhaIdade) + ".");
pularLinha();

console.log("A pessoa a minha esquerda nasceu em " + (anoAtual - idadePessoaEsquerda) + ".");
pularLinha();

console.log("A pessoa a minha direita nasceu em " + (anoAtual - idadePessoaDireita) + ".");
pularLinha();

let mediaIdade = (minhaIdade + idadePessoaEsquerda + idadePessoaDireita) / 3;
console.log("A nossa média de idade é " + mediaIdade.toFixed(2) + ".");
