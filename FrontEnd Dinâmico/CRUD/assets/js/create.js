const URL =
  "https://crudcrud.com/api/9299c78d2a75479bb3a3af215ecc8ca8/produtos";

const today = new Date().toISOString().split("T")[0];
data.max = today;

adicionar.addEventListener("click", (e) => {
  e.preventDefault();
  const produto = gerarProduto();
  if (validarPropriedades(produto)) {
    addProduto(produto).then((response) => {
      if (response.status === 201) {
        alert("Produto adicionado com sucesso!");
        window.location.href = "./dashboard.html";
      }
    });
  }
});

function validarPropriedades(produto) {
  nomeError.innerText = "";
  qtdError.innerText = "";
  urlError.innerText = "";
  tipoError.innerText = "";
  dataError.innerText = "";

  if (produto.nome == "") {
    nomeError.innerText = "Nome é obrigatório";
    return;
  }

  if (produto.qtd == "") {
    qtdError.innerText = "Quantidade é obrigatória";
    return;
  } else if (parseFloat(produto.qtd) <= 0) {
    qtdError.innerText = "Quantidade deve ser um valor acima de zero";
    return;
  }
  if (produto.img == "") {
    urlError.innerText = "Imagem é obrigatória";
    return;
  }

  if (produto.tipo == "") {
    tipoError.innerText = "Tipo é obrigatório";
    return;
  }

  if (produto.data == "") {
    dataError.innerText = "Data é obrigatória";
    return;
  } else if (produto.data > today) {
    dataError.innerText = "Data não pode ser maior do que a data atual";
    return;
  }
  return true;
}

function gerarProduto() {
  const produto = {
    nome: nome.value,
    qtd: quantidade.value,
    img: linkImagem.value,
    tipo: tipoProduto(),
    data: data.value,
    hora: hora.value,
  };
  return produto;
}

async function addProduto(produto) {
  const produtoJson = JSON.stringify(produto);
  const response = await fetch(URL, {
    method: "POST",
    body: produtoJson,
    headers: { "Content-Type": "application/json" },
  });
  return response;
}

function tipoProduto() {
  const tipos = document.getElementsByName("tipo");
  for (i = 0; i < tipos.length; i++) {
    if (tipos[i].checked) return tipos[i].value;
  }
  return "";
}
