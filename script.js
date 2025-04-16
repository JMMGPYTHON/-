const carrinho = [];

function adicionarAoCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const lista = document.getElementById("lista-carrinho");
  const totalEl = document.getElementById("total");
  lista.innerHTML = "";

  let total = 0;
  carrinho.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;

    const removerBtn = document.createElement("button");
    removerBtn.textContent = "Remover";
    removerBtn.style.marginLeft = "10px";
    removerBtn.onclick = () => removerDoCarrinho(index);

    li.appendChild(removerBtn);
    lista.appendChild(li);

    total += item.preco;
  });

  totalEl.textContent = `Total: R$ ${total.toFixed(2)}`;
}

function removerDoCarrinho(index) {
  carrinho.splice(index, 1);
  atualizarCarrinho();
}
