// Entradas de dados
let horasTrabalhadas = Number(prompt("Digite a quantidade de horas trabalhadas:"));
let valorHora = Number(prompt("Digite o valor da hora trabalhada:"));

// 1. Cálculo do Salário Bruto
let salarioBruto = horasTrabalhadas * valorHora;

// 2. Cálculos dos Descontos (Porcentagens)
let inss = salarioBruto * 0.08;            // 8%
let valeTransporte = salarioBruto * 0.06;  // 6%
let ir = salarioBruto * 0.075;             // 7,5%

// 3. Cálculo do Salário Líquido (Bruto - Soma dos descontos)
let totalDescontos = inss + valeTransporte + ir;
let salarioLiquido = salarioBruto - totalDescontos;

// 4. Exibição da Folha de Pagamento
alert(
  `--- FOLHA DE PAGAMENTO ---\n\n` +
  `Salário Bruto: R$ ${salarioBruto.toFixed(2)}\n\n` +
  `--- DESCONTOS ---\n` +
  `INSS (8%): R$ ${inss.toFixed(2)}\n` +
  `Vale Transporte (6%): R$ ${valeTransporte.toFixed(2)}\n` +
  `Imposto de Renda (7,5%): R$ ${ir.toFixed(2)}\n\n` +
  `---------------------------\n` +
  `Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`
);