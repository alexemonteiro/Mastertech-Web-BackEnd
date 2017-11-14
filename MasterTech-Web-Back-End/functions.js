let a = 0;
a = soma(1, 1);
//let b = 2 + 2;
meuLog(a);
meuLog('estou enviando uma mensagem');

// function nome (param, param)
function soma(x, y) {
  console.log('executar soma');
  return x + y;
}

function media(a, b, c) {
  return (a + b + c) / 3;
}

function meuLog(msg) {
  console.log(new Date() + ' ::: ' + msg);
}
