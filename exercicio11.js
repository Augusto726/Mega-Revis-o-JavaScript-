let num = Number(prompt("Digite um numero:"));
let divisores = 0;
let divisoes = 0;

for (let i = 1; i <= num; i++) {
  divisoes = divisoes + 1;

  if (num % i === 0) {
    divisores = divisores + 1;
  }
}

if (divisores === 2) {
  alert(num + " é um número primo!");
} else {
  alert(num + " NÃO é um número primo.");
}

alert("Quantidade de divisões feitas: " + divisoes);