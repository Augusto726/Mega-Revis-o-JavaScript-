let maiorIdade;
let menorIdade;
let soma = 0;
let maiores = 0;
let menores = 0;

for (let i = 1; i <= 15; i++) {
  let idade = Number(prompt("Digite a idade da " + i + "ª pessoa:"));

  soma = soma + idade;

  if (i === 1) {
    maiorIdade = idade;
    menorIdade = idade;
  } else {
    if (idade > maiorIdade) {
      maiorIdade = idade;
    }
    if (idade < menorIdade) {
      menorIdade = idade;
    }
  }

  if (idade >= 18) {
    maiores = maiores + 1;
  } else {
    menores = menores + 1;
  }
}

let media = soma / 15;

alert("Maior idade: " + maiorIdade);
alert("Menor idade: " + menorIdade);
alert("Média das idades: " + media.toFixed(1));
alert("Quantidade de maiores de idade: " + maiores);
alert("Quantidade de menores de idade: " + menores);