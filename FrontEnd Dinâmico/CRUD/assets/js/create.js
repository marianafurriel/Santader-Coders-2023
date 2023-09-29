adicionar.addEventListener("click", (e) => {
  e.preventDefault();
  gerarProduto();
});

function gerarProduto() {
  const produto = {
    nome: nome.value,
    qtd: quantidade.value,
    img: linkImagem.value,
    tipo: tipoProduto(),
    data: data.value,
    hora: hora.value,
  };
  const produtos = JSON.parse(localStorage.getItem("produtos")) || [];
  produtos.push(produto);
  localStorage.setItem("produtos", JSON.stringify(produtos));
}

function tipoProduto() {
  var tipos = document.getElementsByName("tipo");

  for (i = 0; i < tipos.length; i++) {
    if (tipos[i].checked) return tipos[i].value;
  }
}
