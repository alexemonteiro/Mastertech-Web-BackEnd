//math.js

// exports.soma = function soma(x, y) {
//   return x + y;
// }

// const soma = function(x, y) {
//   return x + y;
// }

const soma = (x, y) => parseInt(x) + parseInt(y);
exports.soma = soma;

const subtracao = (x, y) => parseInt(x) - parseInt(y);
exports.subtracao = subtracao;

const primo = (n) => {
    if (n < 2) {
      return false;
    }

    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
}
exports.primo = primo;
// Arrow Function
exports.soma = (x, y) => x + y;
exports.subtracao = (x, y) => x - y;
