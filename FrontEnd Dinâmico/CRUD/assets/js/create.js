if (localStorage.getItem("logado") !== "1") {
  window.location.href = "./index.html";
}

const URL = JSON.parse(localStorage.getItem("url"));


const today = new Date().toISOString().split("T")[0];
data.max = today;

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
getProduto(id);

adicionar.addEventListener("click", (e) => {
  e.preventDefault();
  const produto = gerarProduto();
  if (validarPropriedades(produto)) {
    if (id) {
      updateProduto(id, produto).then((response) => {
        if (response.status === 200) {
          alert("Produto atualizado com sucesso!");
          window.location.href = "./read.html";
        }
      });
    } else {
      addProduto(produto).then((response) => {
        if (response.status === 201) {
          alert("Produto adicionado com sucesso!");
          window.location.href = "./read.html";
        }
      });
    }
  }
});

async function getProduto(id) {
  if (id) {
    const response = await fetch(URL + `/${id}`);
    const produto = await response.json();
    console.log(produto);
    console.log(produto.tipo);
    nome.value = produto.nome;
    quantidade.value = Number(produto.qtd);
    linkImagem.value = produto.img;
    document.getElementById(produto.tipo).checked = true;
    data.value = produto.data;
    hora.value = produto.hora;
  }
}

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

async function updateProduto(id, produto) {
  const response = await fetch(URL + `/${id}`, {
    method: "PUT",
    body: JSON.stringify(produto),
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
