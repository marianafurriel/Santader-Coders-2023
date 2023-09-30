if (localStorage.getItem("logado") !== "1") {
  window.location.href = "./index.html";
}

const URL = JSON.parse(localStorage.getItem("url"));

read();
const interval = setInterval(read, 5000);

async function read() {
  const produtos = await pegarLista();
  localStorage.setItem("produtos", JSON.stringify(produtos));
  bodyTabela.innerHTML = "";

  produtos.forEach((produto) => {
    const botaoDelete = document.createElement("button");
    botaoDelete.textContent = "Deletar";
    botaoDelete.classList.add("btn", "btn-danger");
    botaoDelete.addEventListener("click", () => {
      deletar(produto._id, produto.nome);
    });

    const botaoUpdate = document.createElement("button");
    botaoUpdate.textContent = "Update";
    botaoUpdate.classList.add("btn", "btn-light", "m-2");
    botaoUpdate.addEventListener("click", () => {
      window.location.href = `./create.html?id=${produto._id}`;
    });
    const tdBotoes = document.createElement("td");
    tdBotoes.classList.add("text-center");
    tdBotoes.appendChild(botaoDelete);
    tdBotoes.appendChild(botaoUpdate);
    //cria a linha do produto
    const trProduto = document.createElement("tr");
    trProduto.classList.add("align-middle");

    //cria a imagem do produto
    const tdImg = document.createElement("td");
    const img = document.createElement("img");
    img.src = produto.img;
    img.width = "50";
    img.height = "50";
    tdImg.appendChild(img);

    //cria a td do nome
    const tdNome = document.createElement("td");
    tdNome.classList.add("text-center");
    tdNome.textContent = produto.nome;

    const tdQtd = document.createElement("td");
    tdQtd.classList.add("text-center");
    tdQtd.textContent = produto.qtd;

    const tdTipo = document.createElement("td");
    tdTipo.classList.add("text-center", "text-capitalize");
    tdTipo.textContent = produto.tipo;

    const tdData = document.createElement("td");
    tdData.classList.add("text-center");
    tdData.textContent = produto.data;

    const tdHora = document.createElement("td");
    tdHora.classList.add("text-center");
    tdHora.textContent = produto.hora || "-";

    trProduto.appendChild(tdImg);
    trProduto.appendChild(tdNome);
    trProduto.appendChild(tdQtd);
    trProduto.appendChild(tdTipo);
    trProduto.appendChild(tdData);
    trProduto.appendChild(tdHora);
    trProduto.appendChild(tdBotoes);

    bodyTabela.appendChild(trProduto);
  });
  console.log(produtos);
}

async function pegarLista() {
  const produtos = await fetch(URL);
  return await produtos.json();
}

async function deletar(id, nome) {
  if (confirm(`Deseja mesmo deletar ${nome}?`)) {
    const response = await fetch(URL + `/${id}`, { method: "DELETE" });
    window.location.reload();
  }
}
