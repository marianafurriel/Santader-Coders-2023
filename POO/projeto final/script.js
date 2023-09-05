class Npc {
  #nome;
  #endereco;
  constructor(nome, endereco) {
    this.#nome = nome;
    this.#endereco = endereco;
  }
  get nome() {
    return this.#nome;
  }
  get endereco() {
    return this.#endereco;
  }
}

class Presenteavel extends Npc {
  #aniversario;
  #melhoresPresentes;
  constructor(nome, endereco, aniversario, melhoresPresentes) {
    super(nome, endereco);
    this.#aniversario = aniversario;
    this.#melhoresPresentes = melhoresPresentes;
  }
  get aniversario() {
    return this.#aniversario;
  }
  get melhoresPresentes() {
    return this.#melhoresPresentes;
  }
}

class Casavel extends Presenteavel {
  #presentesPossiveis;
  constructor(
    nome,
    endereco,
    aniversario,
    melhoresPresentes,
    presentesPossiveis
  ) {
    super(nome, endereco, aniversario, melhoresPresentes);
    this.#presentesPossiveis = presentesPossiveis;
  }
  get presentesPossiveis() {
    return this.#presentesPossiveis;
  }
}

class ManipularDom {
  static init() {
    ManipularDom.exibeFormCasavel();
    ManipularDom.exibeFormPresenteavel();
    const formularios = [...document.querySelectorAll(".formulario")];
    const botaoAdicionar = document.querySelector("#adicionar");
    botaoAdicionar.addEventListener("click", () => {
      ListaNpc.adicionarNpc();
      formularios.forEach((form) => form.reset());
      ManipularDom.atualizarLista();
    });
  }
  static atualizarLista() {
    const divNpcs = document.querySelector(".npcs");
    const npcAtual = npcs[qtdNpcs - 1];
    const novoNpc = `<div class="npc">
  <span id="nomeSpan">Nome:${npcAtual.nome}</span>
  <span id="enderecoSpan">Nome:${npcAtual.endereco}</span>
  <span id="aniversarioSpan">${
    npcAtual.aniversario !== undefined ? "niver: " + npcAtual.aniversario : ""
  }</span>
  <span>${
    Npc.prototype.instancia(npcAtual) === "Casavel" ? "Casável" : ""
  }</span>
  <span id="presente1Span">${
    Npc.prototype.instancia(npcAtual) === "Presenteavel"
      ? npcAtual.melhoresPresentes[0]
      : ""
  }</span>
  <span id="presente2Span">${
    Npc.prototype.instancia(npcAtual) === "Presenteavel"
      ? npcAtual.melhoresPresentes[1]
      : ""
  }</span>
  <span id="presentePossivel1Span">${
    Npc.prototype.instancia(npcAtual) === "Casavel"
      ? npcAtual.presentesPossiveis[0]
      : ""
  }</span>
  <span id="presentePossivel1Span">${
    Npc.prototype.instancia(npcAtual) === "Casavel"
      ? npcAtual.presentesPossiveis[1]
      : ""
  }</span>
</div>`;
    divNpcs.innerHTML += novoNpc;
  }
  static exibeFormPresenteavel() {
    const formPresenteavel = document.querySelector("#formPresenteavel");
    const radioPresenteavel = document.querySelector("#presenteavel");
    radioPresenteavel.addEventListener("click", () => {
      formPresenteavel.style.display = "block";
    });
    const radioNaoPresenteavel = document.querySelector("#naoPresenteavel");
    radioNaoPresenteavel.addEventListener("click", () => {
      formPresenteavel.style.display = "none";
    });
  }
  static escondeFormPresenteavel() {
    const formPresenteavel = document.querySelector("#formPresenteavel");
    formPresenteavel.style.display = "none";
  }
  static exibeFormCasavel() {
    const formCasavel = document.querySelector("#formCasavel");
    const radioCasavel = document.querySelector("#casavel");
    radioCasavel.addEventListener("click", () => {
      formCasavel.style.display = "block";
    });
    const radioNaoCasavel = document.querySelector("#naoCasavel");
    radioNaoCasavel.addEventListener("click", () => {
      formCasavel.style.display = "none";
    });
  }
  static escondeFormCasavel() {
    const formCasavel = document.querySelector("#formCasavel");
    formCasavel.style.display = "none";
  }
}

class ListaNpc {
  static adicionarNpc() {
    const npc = ListaNpc.gerarNpc();
    npcs.push(npc);
    qtdNpcs++;
  }
  static gerarNpc() {
    const nome = document.querySelector("#nome").value;
    const endereco = document.querySelector("#endereco").value;
    const presenteavel = document.querySelector("#presenteavel").checked;
    const presentes = [
      document.querySelector("#presentes1").value,
      document.querySelector("#presentes2").value,
    ];
    const aniversario = document.querySelector("#aniversario").value;
    const casavel = document.querySelector("#casavel").checked;
    const presentesPossiveis = [
      document.querySelector("#presentesPossiveis1").value,
      document.querySelector("#presentesPossiveis2").value,
    ];
    if (casavel) {
      const npc = new Casavel(
        nome,
        endereco,
        aniversario,
        presentes,
        presentesPossiveis
      );
      return npc;
    } else if (presenteavel) {
      const npc = new Presenteavel(nome, endereco, aniversario, presentes);
      return npc;
    } else {
      const npc = new Npc(nome, endereco);
      return npc;
    }
  }
}

Npc.prototype.instancia = function (o) {
  if (o instanceof Casavel) {
    return "Casavel";
  }
  if (o instanceof Presenteavel) {
    return "Presenteavel";
  }
};
console.log(Npc.prototype);
const npcs = [];
let qtdNpcs = 0;
ManipularDom.init();
