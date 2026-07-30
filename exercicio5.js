let num1 = Number(prompt("Fala o primeiro numero"));
let num2 = Number(prompt("Fala o segundo numero"));
let num3 = Number(prompt("Fala o terceiro numero"));

let maior, meio, menor;


if (num1 >= num2 && num1 >= num3) {
  maior = num1;
} else if (num2 >= num1 && num2 >= num3) {
  maior = num2;
} else {
  maior = num3;
}

if (num1 <= num2 && num1 <= num3) {
  menor = num1;
} else if (num2 <= num1 && num2 <= num3) {
  menor = num2;
} else {
  menor = num3;
}

meio = (num1 + num2 + num3) - maior - menor;


alert(`Maior: ${maior}\nDo Meio: ${meio}\nMenor: ${menor}`);