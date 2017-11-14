// Exercicio 4 - maior numero

let arr = [11, -1, 1, 2, 7, 5, 6, 13, 9, 51, 10] ;

let maior = arr[0];

for (var i = 0; i < arr.length; i++){
    if(arr[i] > maior)
        maior = arr[i];
}

console.log(`O maior número é ${maior}`);
