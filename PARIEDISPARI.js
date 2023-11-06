

let n = parseInt(prompt('Quanti numeri vuoi inserire?'));

let sommaPos = 0, sommaNeg = 0;
let a;

for (let i = 0; i < n; i++){
  a = parseInt(prompt('inserisci il primo numero'));
  if (a > 0) {
    sommaPos += a;
  } else {
    sommaNeg += a;
  }
}

console.log(sommaPos);
console.log(sommaNeg);