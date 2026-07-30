let soma = 0;
let pares = 0;
let impares = 0;
let positivos = 0;
let negativos = 0;

for (let i = 1; i <= 20; i++) {
  let num = Number(prompt("Digite um numero:"));

  soma = soma + num;

  if (num % 2 === 0) {
    pares = pares + 1;
  } else {
    impares = impares + 1;
  }

  if (num > 0) {
    positivos = positivos + 1;
  }
  if (num < 0) {
    negativos = negativos + 1;
  }
}

let media = soma / 20;

alert("Soma: " + soma);
alert("Média: " + media);
alert("Pares: " + pares);
alert("Ímpares: " + impares);
alert("Positivos: " + positivos);
alert("Negativos: " + negativos);