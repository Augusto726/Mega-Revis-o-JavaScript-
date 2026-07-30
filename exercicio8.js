
let vitorias = Number(prompt("Digite o número de vitórias:"));
let empates = Number(prompt("Digite o número de empates:"));
let derrotas = Number(prompt("Digite o número de derrotas:"));

let totalJogos = vitorias + empates + derrotas;
let pontos = (vitorias * 3) + (empates * 1);


let pontosMaximos = totalJogos * 3;

let aproveitamento = totalJogos > 0 ? (pontos / pontosMaximos) * 100 : 0;


let classificacao = "";

if (aproveitamento >= 75) {
  classificacao = "Excelente";
} else if (aproveitamento >= 50) {
  classificacao = "Bom";
} else if (aproveitamento >= 25) {
  classificacao = "Regular";
} else {
  classificacao = "Péssimo";
}

alert(
  `--- DESEMPENHO NO CAMPEONATO ---\n\n` +
  `Jogos realizados: ${totalJogos}\n` +
  `Pontuação total: ${pontos} pts\n` +
  `Aproveitamento: ${aproveitamento.toFixed(1)}%\n\n` +
  `Status: ${classificacao}`
);