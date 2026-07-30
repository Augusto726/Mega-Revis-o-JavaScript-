let a = 0;
let b = 1;

for (let i = 1; i <= 30; i++) {
  alert(a);

  let proximo = a + b;
  a = b;
  b = proximo;
}