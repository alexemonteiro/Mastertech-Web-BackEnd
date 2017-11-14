// Exercicio 1 - Ver se uma palavra é um palindromo

// importar o leitor
const readline = require('readline');

// inicializar o leitor
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// solicitar ao usuário que digite uma palavra
rl.question('Digite uma palavra: ', (answer) => {
  // após o usuário digitar a palavra, guardar na variavel p
  let p = answer;
  // considera que toda palavra é um palindromo ate que se prove o contrario
  let ehPalindromo = true;

  // para cada letra da palavra
  for (var i = 0; i < p.length; i++) { // da para otimizar indo apenas ate o meio da palavra: i <= (p.length / 2)
    // compara a letra no indice "i" com a letra no indice "tamanho da palavra - 1 - i"
    if (p[i] !== p[p.length - 1 - i]) {
      // guarda a informacao de que nao é um palindromo
      ehPalindromo = false;

      // termina o laco "for"
      break;
    }
  }

  // se for um palindromo (se "ehPalindromo" nao for alterado para false)
  if (ehPalindromo) {
    // imprime que a palavra é um palindromo
    console.log(`${p} é um palíndromo`);
  } else { // caso contrário (ehPalindromo é true, e não entrou nenhuma vez no if dentro do "for")
    // imprime que a palavra não é um palindromo
    console.log(`${p} não é um palíndromo`);
  }

  rl.close();
});
