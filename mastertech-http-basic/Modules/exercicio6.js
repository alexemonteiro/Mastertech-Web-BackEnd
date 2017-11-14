const math = require('./Math.js');
// importar o leitor
const readline = require('readline');

const chalk = require('chalk');

// inicializar o leitor
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número: ', (answer) => {
  let primosContar = 0;

  for (var i = 2; i <= parseInt(answer); i++) {
    if (math.primo(i)) {
      primosContar++;
    }
  }

  console.log(`Existem ${chalk.blue(primosContar)} número(s) primo(s) entre ${chalk.green('0')} e ${chalk.green(answer)}`);

  rl.close();
});
