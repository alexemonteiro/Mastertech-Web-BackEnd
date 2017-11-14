const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var n = 0;

rl.question('Digite um número de 1 a 5: ', (n) => {

  switch (parseInt(n)){
      case 1:
          console.log('Um');
      break;
      case 2:
          console.log("Dois");
          break;
      case 3:
          console.log('Três');
          break;
      case 4:
          console.log('Quatro');
          break;
      case 5:
          console.log('Cinco');
          break;
  }

rl.close();
})
