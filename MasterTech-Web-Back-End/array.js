// array
let a = [16, 24, 39, 41];

// for
for (let i = 0 ; i < a.length; i++) {
  console.log('item ' + (i + 1) + ' : ' + a[i]);
}

// for each
for (let e of a) {
  console.log(e);
  if (e % 2 === 0) {
    console.log(e +' é par');
  }

}

// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[3]);
