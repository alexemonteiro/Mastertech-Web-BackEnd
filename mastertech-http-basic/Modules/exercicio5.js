

const math = require('./Math');
// importar o leitor
const readline = require('readline');

// inicializar o leitor
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número: ', (answer) => {
  if (math.primo(parseInt(answer))) {
    console.log('É primo');
  } else {
    console.log('Não é primo');
  }

  rl.close();
});
