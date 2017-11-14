const m = require('./math');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let a = 0, b = 0;

rl.question('Digite o primeiro numero: ', (answer) => {
  a = answer;

  rl.question('Digite o segundo numero: ', (answer2) => {
    b = answer2;

    console.log(m.soma(+a, +b));

    rl.close();
  })
})


// console.log(m.soma(3, 7));
//
// console.log(m.subtracao(10, 7));
