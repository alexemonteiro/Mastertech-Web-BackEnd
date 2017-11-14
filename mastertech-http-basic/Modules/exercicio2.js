// Exercicio 2 - Criar uma função para inverter a palvra hoje para ejoh

const readline = require('readline');

//FUNCAO readline PARA RECEBER DADO NO PROMPT:
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// PASSO 1: RECEBENDO A PALAVRA:
rl.question('Digite a palavra: ', (palavra) => {
  p = palavra;
//PASSO 2: MOSTRAR PALAVRA DIGITADA:
  console.log(`voce digitou: ${p}`);
  console.log(`o tamanho da palavra é: ${p.length}`);
  BytesP = p.length;
  InverteP (p, BytesP);

  rl.close();

});

// AQUI VAMOS INVERTER A PALAVRA
function InverteP (DescPalavra, TamanhoPalavra) {
// AQUI TEREMOS UM NOVO VETOR PARA ARMAZANAR A PALAVRA INVERTIDA:
  let NewP = '';

// VERSAO 2!
//PASSO 3: VAMOS PERCORRER A PALAVRA, LETRA A LETRA, USANDO O INDICE DO VETOR
  for (var i = 0; i < TamanhoPalavra; ++i) {
// PRINTS DE CONTROLE
    //console.log('o vetor *p* esta na posicao: ' + i);
    //console.log('a palavra invertida esta na posicao: ' + (TamanhoPalavra - (i+1)));
    // o TamanhoPalavra - (i+1) CRIA A POSICAO NO NOVO VETOR NewP:
    //AQUI ESTAMOS ATRIBUINDO A ULTIMA LETRA DO VETOR p AO NOVO VETOR NewP:
    NewP = NewP + p[(TamanhoPalavra - (i+1))];
    //console.log('NewP = ' + NewP);
    //console.log('=================================== ');
  }
  console.log('A nova palavra é = ' + NewP);
}



// cd Desktop/Cursos/Mastertech-Backend/moduless

// node Aula03_exercicio1.js
