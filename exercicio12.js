let produtos = [];
let preco = Number(prompt("Digite o preço do produto (ou 0 para sair):"));

while (preco !== 0 && !isNaN(preco)) {
  let nome = prompt("Digite o nome do produto:");
  produtos.push({ nome: nome, preco: preco });
  preco = Number(prompt("Digite o preço do produto (ou 0 para sair):"));
}

if (produtos.length > 0) {
  let quantidade = produtos.length;
  let valorTotal = 0;
  let maisCaro = produtos[0];
  let maisBarato = produtos[0];

  for (let i = 0; i < produtos.length; i++) {
    let atual = produtos[i];
    valorTotal += atual.preco;

    if (atual.preco > maisCaro.preco) {
      maisCaro = atual;
    }
    if (atual.preco < maisBarato.preco) {
      maisBarato = atual;
    }
  }

  let media = valorTotal / quantidade;

  console.log("Quantidade de produtos:", quantidade);
  console.log("Valor total: R$", valorTotal.toFixed(2));
  console.log("Produto mais caro:", maisCaro.nome, "(R$", maisCaro.preco.toFixed(2) + ")");
  console.log("Produto mais barato:", maisBarato.nome, "(R$", maisBarato.preco.toFixed(2) + ")");
  console.log("Média dos preços: R$", media.toFixed(2));
} else {
  console.log("Nenhum produto cadastrado.");
}