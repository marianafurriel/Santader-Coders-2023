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
    ManipularDom.controlaFormCasavel();
    ManipularDom.controlaFormPresenteavel();
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

    //div de cada NPC
    const divNpc = document.createElement("div");
    divNpc.classList.add("npc");

    // span do nome do npc
    const nomeSpan = document.createElement("span");
    nomeSpan.id = "nomeSpan";
    nomeSpan.textContent = `Nome:${npcAtual.nome}`;

    //span endereço
    const enderecoSpan = document.createElement("span");
    enderecoSpan.id = "enderecoSpan";
    enderecoSpan.textContent = `Endereço: ${npcAtual.endereco}`;

    //span aniversario
    const aniversarioSpan = document.createElement("span");
    aniversarioSpan.id = "aniversarioSpan";

    //spans presentes
    const presente1Span = document.createElement("span");
    presente1Span.id = "presente1Span";
    const presente2Span = document.createElement("span");
    presente2Span.id = "presente2Span";

    //span casavel
    const casavelSpan = document.createElement("span");
    casavelSpan.id = "casavelSpan";

    //span presentes possiveis
    const presentePossivel1Span = document.createElement("span");
    presentePossivel1Span.id = "presentePossivel1Span";
    const presentePossivel2Span = document.createElement("span");
    presentePossivel2Span.id = "presentePossivel2Span";

    //checando se é presenteavel ou casavel
    switch (Npc.prototype.instancia(npcAtual)) {
      case "Casavel":
        aniversarioSpan.textContent = npcAtual.aniversario;
        casavelSpan.textContent = "Sim";
        presente1Span.textContent = npcAtual.melhoresPresentes[0];
        presente2Span.textContent = npcAtual.melhoresPresentes[1];
        presentePossivel1Span.textContent = npcAtual.presentesPossiveis[0];
        presentePossivel2Span.textContent = npcAtual.presentesPossiveis[1];
        break;
      case "Presenteavel":
        aniversarioSpan.textContent = npcAtual.aniversario;
        presente1Span.textContent = npcAtual.melhoresPresentes[0];
        presente2Span.textContent = npcAtual.melhoresPresentes[1];
        break;
      default:
        casavelSpan.textContent = "Não";
    }

    //cria botao de editar
    const buttonEditar = document.createElement("button");
    buttonEditar.type = "button";
    buttonEditar.classList.add("btn", "btn-primary", "botaoEdicao");
    buttonEditar.setAttribute("data-bs-toggle", "modal");
    buttonEditar.setAttribute("data-bs-target", "#exampleModal");
    buttonEditar.textContent = "Editar";
    buttonEditar.addEventListener("click", () => {
      ManipularDom.formularioEdicao(qtdNpcs - 1);
    });
    const buttonDeletar = document.createElement("button");
    buttonDeletar.textContent = "Deletar";

    // Crie a estrutura do div NPC e aninhe os elementos criados
    divNpc.appendChild(nomeSpan);
    divNpc.appendChild(enderecoSpan);
    divNpc.appendChild(aniversarioSpan);
    divNpc.appendChild(presente1Span);
    divNpc.appendChild(presente2Span);
    divNpc.appendChild(presentePossivel1Span);
    divNpc.appendChild(presentePossivel2Span);

    const divBotoes = document.createElement("div");
    divBotoes.classList.add("botoes");
    divBotoes.appendChild(buttonEditar);
    divBotoes.appendChild(buttonDeletar);

    divNpc.appendChild(divBotoes);

    // Agora você pode adicionar o divNpc ao seu documento onde desejar

    divNpcs.appendChild(divNpc); //     const novoNpc = `<div class="npc">
    //   <span id="nomeSpan">Nome:${npcAtual.nome}</span>
    //   <span id="enderecoSpan">Nome:${npcAtual.endereco}</span>
    //   <span id="aniversarioSpan">${
    //     Npc.prototype.instancia(npcAtual) === "Presenteavel"
    //       ? "niver: " + npcAtual.aniversario
    //       : ""
    //   }</span>
    //   <span>${
    //     Npc.prototype.instancia(npcAtual) === "Casavel" ? "Casável" : ""
    //   }</span>
    //   <span id="presente1Span">${
    //     Npc.prototype.instancia(npcAtual) === "Presenteavel"
    //       ? npcAtual.melhoresPresentes[0]
    //       : ""
    //   }</span>
    //   <span id="presente2Span">${
    //     Npc.prototype.instancia(npcAtual) === "Presenteavel"
    //       ? npcAtual.melhoresPresentes[1]
    //       : ""
    //   }</span>
    //   <span id="presentePossivel1Span">${
    //     Npc.prototype.instancia(npcAtual) === "Casavel"
    //       ? npcAtual.presentesPossiveis[0]
    //       : ""
    //   }</span>
    //   <span id="presentePossivel1Span">${
    //     Npc.prototype.instancia(npcAtual) === "Casavel"
    //       ? npcAtual.presentesPossiveis[1]
    //       : ""
    //   }</span>
    //   <div class="botoes">
    //   <button type="button" class="btn btn-primary botaoEdicao" data-bs-toggle="modal" data-bs-target="#exampleModal" id="npc${
    //     qtdNpcs - 1
    //   }>Editar</button>
    //   <button>Deletar</button>
    // </div>`;

    divNpcs.innerHTML += novoNpc;
    const botaoEditar = document.querySelector(`#npc${qtdNpcs - 1}`);
    botaoEditar.addEventListener("click", () => {});
  }
  static controlaFormPresenteavel() {
    const formPresenteavel = document.querySelector("#formPresenteavel");
    const radioPresenteavel = document.querySelector("#presenteavel");
    const formCasavel = document.querySelector("#formCasavel");
    radioPresenteavel.addEventListener("click", () => {
      formPresenteavel.style.display = "block";
    });
    const radioNaoPresenteavel = document.querySelector("#naoPresenteavel");
    radioNaoPresenteavel.addEventListener("click", () => {
      formPresenteavel.style.display = "none";
      formCasavel.style.display = "none";
    });

    const formPresenteavelEditar = document.querySelector(
      "#formPresenteavelEditar"
    );
    const radioPresenteavelEditar = document.querySelector(
      "#presenteavelEditar"
    );
    radioPresenteavelEditar.addEventListener("click", () => {
      formPresenteavelEditar.style.display = "block";
    });

    const radioNaoPresenteavelEditar = document.querySelector(
      "#naoPresenteavelEditar"
    );
    const formCasavelEditar = document.querySelector("#formCasavelEditar");
    radioNaoPresenteavelEditar.addEventListener("click", () => {
      formPresenteavelEditar.style.display = "none";
      formCasavelEditar.style.display = "none";
    });
  }
  static controlaFormCasavel() {
    const formCasavel = document.querySelector("#formCasavel");
    const radioCasavel = document.querySelector("#casavel");
    radioCasavel.addEventListener("click", () => {
      formCasavel.style.display = "block";
    });
    const radioNaoCasavel = document.querySelector("#naoCasavel");
    radioNaoCasavel.addEventListener("click", () => {
      formCasavel.style.display = "none";
    });

    const formCasavelEditar = document.querySelector("#formCasavelEditar");
    const radioCasavelEditar = document.querySelector("#casavelEditar");
    radioCasavelEditar.addEventListener("click", () => {
      formCasavelEditar.style.display = "block";
    });
    const radioNaoCasavelEditar = document.querySelector("#naoCasavelEditar");
    radioNaoCasavelEditar.addEventListener("click", () => {
      formCasavelEditar.style.display = "none";
    });
  }
  // static escondeFormCasavel() {
  //   const formCasavel = document.querySelector("#formCasavel");
  //   formCasavel.style.display = "none";
  //   const formCasavelEditar = document.querySelector("#formCasavelEditar");
  //   formCasavelEditar.style.display = "none";
  // }
  static formularioEdicao(id) {
    document.querySelector(
      ".modal-title"
    ).textContent = `Edite os dados de ${npc[id].nome}`;
    document.querySelector("#enderecoEditar").value;
    document.querySelector("#presenteavel").checked;
    document.querySelector("#presentes1Editar").value;
    document.querySelector("#presentes2Editar").value;
    const aniversario = document.querySelector("#aniversarioEditar").value;
    const casavel = document.querySelector("#casavel").checked;
    const presentesPossiveis = [
      document.querySelector("#presentesPossiveis1Editar").value,
      document.querySelector("#presentesPossiveis2Editar").value,
    ];
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
  static editarNpc(npc) {}
  static apagarNpc() {}
}

const teste = new Casavel();
const teste2 = new Presenteavel();
Npc.prototype.instancia = function (o) {
  if (o instanceof Casavel) {
    return "Casavel";
  }
  if (o instanceof Presenteavel) {
    return "Presenteavel";
  }
};
console.log(
  "teste se casavel é presenteavel: ",
  Npc.prototype.instancia(teste) === "Presenteavel"
);
console.log(
  "teste se casavel é presenteavel: ",
  Npc.prototype.instancia(teste2)
);
const npcs = [];
let qtdNpcs = 0;
ManipularDom.init();
