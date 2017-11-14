// Exercicio 3 - criar a tabuada. Ex: número 7 (7x2=14, 7x3=21..)

const readline = require('readline');

//FUNCAO readline PARA RECEBER DADO NO PROMPT:
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout


});
// PASSO 1: RECEBENDO A PALAVRA:
function tabuada(n) {

for (let i = 1; i <= 10; i++) {
  console.log(`${n} * ${i} = `+n * i)
}
}
rl.question('Digite um número para a tabuada: ', (numero) => {

tabuada(numero)

  rl.close();
})
