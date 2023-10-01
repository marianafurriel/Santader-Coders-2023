if (localStorage.getItem("logado") !== "1") {
  window.location.href = "./index.html";
}

const URL = JSON.parse(localStorage.getItem("url"));

read();
// const interval = setInterval(read, 5000);

async function read() {
  const produtos = await pegarLista();
  localStorage.setItem("produtos", JSON.stringify(produtos));
  bodyTabela.innerHTML = "";

  produtos.forEach((produto, indice) => {
    if (window.location.href.indexOf("/dashboard.html") !== -1 && indice > 4) {
      return;
    }

    //cria a linha do produto
    const trProduto = document.createElement("tr");
    trProduto.classList.add("align-middle");

    trProduto.addEventListener("click", () => {
      editaModal(produto);
    });
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

    //div dos botoes
    const botaoDelete = document.createElement("button");
    botaoDelete.textContent = "Deletar";
    botaoDelete.classList.add("btn", "btn-danger");
    botaoDelete.addEventListener("click", () => {
      deletar(produto._id, produto.nome, trProduto);
    });

    const botaoUpdate = document.createElement("button");
    botaoUpdate.textContent = "Update";
    botaoUpdate.classList.add("btn", "btn-light", "m-2");
    botaoUpdate.addEventListener("click", () => {
      window.location.href = `./create.html?id=${produto._id}`;
    });
    const tdBotoes = document.createElement("td");
    tdBotoes.classList.add("text-center", "border-start");
    tdBotoes.appendChild(botaoDelete);
    tdBotoes.appendChild(botaoUpdate);

    trProduto.appendChild(tdImg);
    tdImg.setAttribute("data-bs-toggle", "modal");
    tdImg.setAttribute("data-bs-target", "#exampleModal");

    trProduto.appendChild(tdNome);
    tdNome.setAttribute("data-bs-toggle", "modal");
    tdNome.setAttribute("data-bs-target", "#exampleModal");

    trProduto.appendChild(tdQtd);
    tdQtd.setAttribute("data-bs-toggle", "modal");
    tdQtd.setAttribute("data-bs-target", "#exampleModal");

    trProduto.appendChild(tdTipo);
    tdTipo.setAttribute("data-bs-toggle", "modal");
    tdTipo.setAttribute("data-bs-target", "#exampleModal");

    trProduto.appendChild(tdData);
    tdData.setAttribute("data-bs-toggle", "modal");
    tdData.setAttribute("data-bs-target", "#exampleModal");

    trProduto.appendChild(tdHora);
    tdHora.setAttribute("data-bs-toggle", "modal");
    tdHora.setAttribute("data-bs-target", "#exampleModal");
    trProduto.appendChild(tdBotoes);

    bodyTabela.appendChild(trProduto);
  });
}

function editaModal(produto) {
  const corpoModal = document.getElementById("corpoModal");
  corpoModal.innerHTML = "";

  const img = document.createElement("img");
  img.width = 100;
  img.src = produto.img;

  const div = document.createElement("div");
  div.classList.add("ms-5");
  const nome = document.createElement("p");
  nome.textContent = produto.nome;
  const qtd = document.createElement("p");
  qtd.textContent = produto.qtd;
  const data = document.createElement("p");
  data.textContent = produto.data;
  const hora = document.createElement("p");
  hora.textContent = produto.hora;

  div.appendChild(nome);
  div.appendChild(qtd);
  div.appendChild(data);
  div.appendChild(hora);

  corpoModal.appendChild(img);
  corpoModal.appendChild(div);
}

async function pegarLista() {
  const produtos = await fetch(URL);
  return await produtos.json();
}

async function deletar(id, nome, trProduto) {
  if (confirm(`Deseja mesmo deletar ${nome}?`)) {
    const response = await fetch(URL + `/${id}`, { method: "DELETE" });
    window.location.reload();
  }
}
