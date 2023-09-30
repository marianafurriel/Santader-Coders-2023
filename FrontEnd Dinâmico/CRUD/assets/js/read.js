const URL =
  "https://crudcrud.com/api/24c3d0d4511c4592a1c51168f6919523/produtos";

read();
async function read() {
  const produtos = await pegar();
  bodyTabela.innerHTML = "";
  produtos.forEach((produto) => {
    const botaoDelete = document.createElement("button");
    botaoDelete.textContent = "Deletar";

    botaoDelete.addEventListener("click", () => {
      deletar(produto._id, produto.nome);
    });

    const botaoUpdate = document.createElement("button");
    botaoUpdate.textContent = "Update";
    botaoUpdate.addEventListener("click", () => {
      window.location.href = `./create.html?id=${produto._id}`;
    });
    const tdBotoes = document.createElement("td");
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

async function pegar() {
  const produtos = await fetch(URL);
  return await produtos.json();
}

async function deletar(id, nome) {
  if (confirm(`Deseja mesmo deletar ${nome}?`)) {
    const response = await fetch(URL + `/${id}`, { method: "DELETE" });
    window.location.reload();
  }
}
