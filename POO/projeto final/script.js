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
  set nome(nome) {
    this.#nome = nome;
  }
  set endereco(endereco) {
    this.#endereco = endereco;
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
  set aniversario(aniversario) {
    this.#aniversario = aniversario;
  }
  set melhoresPresentes(melhoresPresentes) {
    this.#melhoresPresentes = melhoresPresentes;
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
  set presentesPossiveis(presentesPossiveis) {
    this.#presentesPossiveis = presentesPossiveis;
  }
}

class ManipularDom {
  static init() {
    ManipularDom.controlaFormCasavel();
    ManipularDom.controlaFormPresenteavel();
    // const formularios = [...document.querySelectorAll(".formulario")];
    const botaoAdicionar = document.querySelector("#adicionar");
    botaoAdicionar.addEventListener("click", () => {
      ListaNpc.adicionarNpc();
      ManipularDom.resetarFormulario();
      // formularios.forEach((form) => form.reset());
      ManipularDom.atualizarLista();
    });
  }
  static atualizarLista() {
    const divNpcs = document.querySelector(".npcs");
    divNpcs.innerHTML = "";
    npcs.forEach((npcAtual) => {
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
        ManipularDom.formularioEdicao(npcAtual);
      });

      const buttonDeletar = document.createElement("button");
      buttonDeletar.setAttribute("data-bs-toggle", "modal");
      buttonDeletar.setAttribute("data-bs-target", "#confirmaDelecao");
      buttonDeletar.textContent = "Deletar";
      buttonDeletar.addEventListener("click", () => {
        ManipularDom.modalDelecao(npcAtual);
        // ListaNpc.apagarNpc(npcAtual);
        // ManipularDom.atualizarLista();
      });
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

      divNpcs.appendChild(divNpc);
      // divNpcs.innerHTML += novoNpc;
      // const botaoEditar = document.querySelector(`#npc${qtdNpcs - 1}`);
      // botaoEditar.addEventListener("click", () => {});
    });
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
  static formularioEdicao(npcEditar) {
    console.log("instancia: ", Npc.prototype.instancia(npcEditar));
    const divFooterModal = document.querySelector(".modal-footer-edicao");
    divFooterModal.innerHTML = "";
    document.querySelector(
      ".modal-title-edicao"
    ).textContent = `Edite os dados de ${npcEditar.nome}`;
    document.querySelector("#nomeEditar").value = npcEditar.nome;
    document.querySelector("#enderecoEditar").value = npcEditar.endereco;
    document.querySelector("#naoPresenteavelEditar").checked = true;

    if (Npc.prototype.instancia(npcEditar) === "Casavel") {
      document.querySelector("#formCasavelEditar").style.display = "block";
      document.querySelector("#formPresenteavelEditar").style.display = "block";
      document.querySelector("#presenteavelEditar").checked = true;
      document.querySelector("#casavelEditar").checked = true;
      // ManipularDom.controlaFormCasavel();
      document.querySelector("#presentes1Editar").value =
        npcEditar.melhoresPresentes[0];
      document.querySelector("#presentes2Editar").value =
        npcEditar.melhoresPresentes[1];
      document.querySelector("#aniversarioEditar").value =
        npcEditar.aniversario;
      document.querySelector("#casavel").checked = true;
      document.querySelector("#presentesPossiveis1Editar").value =
        npcEditar.presentesPossiveis[0];
      document.querySelector("#presentesPossiveis2Editar").value =
        npcEditar.presentesPossiveis[1];
    } else if (Npc.prototype.instancia(npcEditar) === "Presenteavel") {
      document.querySelector("#formPresenteavelEditar").style.display = "block";
      document.querySelector("#presenteavelEditar").checked = true;
      document.querySelector("#naoCasavelEditar").checked = true;
      // ManipularDom.controlaFormCasavel();
      document.querySelector("#presentes1Editar").value =
        npcEditar.melhoresPresentes[0];
      document.querySelector("#presentes2Editar").value =
        npcEditar.melhoresPresentes[1];
      document.querySelector("#aniversarioEditar").value =
        npcEditar.aniversario;
    }
    const salvarEdicao = document.createElement("button");
    salvarEdicao.setAttribute("type", "button");
    salvarEdicao.setAttribute("data-bs-dismiss", "modal");
    salvarEdicao.classList.add("btn", "btn-primary");
    salvarEdicao.textContent = "Save changes";
    salvarEdicao.addEventListener("click", () => {
      ListaNpc.editarNpc(npcEditar);
      ManipularDom.resetarFormulario();

      console.log(npcs);
      ManipularDom.atualizarLista();
    });

    const closeModal = document.createElement("button");
    closeModal.setAttribute("type", "button");
    closeModal.setAttribute("data-bs-dismiss", "modal");
    closeModal.classList.add("btn", "btn-secondary");
    closeModal.textContent = "Close";
    closeModal.addEventListener("click", () => {
      divFooterModal.innerHTML = "";
    });
    divFooterModal.appendChild(closeModal);
    divFooterModal.appendChild(salvarEdicao);
  }
  static resetarFormulario() {
    const formularios = [...document.querySelectorAll(".formulario")];
    formularios.forEach((form) => form.reset());
    const formCasavel = document.querySelector("#formCasavel");
    const radioCasavel = document.querySelector("#casavel");
    // const formCasavelEditar = document.querySelector("#formCasavelEditar");
    // const radioCasavelEditar = document.querySelector("#casavelEditar");
    formCasavel.style.display = "none";
    radioCasavel.style.display = "none";
  }
  static modalDelecao(npcApagar) {
    const divBotoes = document.querySelector(".modal-footer-delecao");
    divBotoes.innerHTML = "";
    document.querySelector(
      ".p-confirmar-delecao"
    ).textContent = `Deseja mesmo deletar o NPC ${npcApagar.nome}?`;
    const botaoConfirma = document.createElement("button");
    botaoConfirma.classList.add("btn", "btn-danger");
    botaoConfirma.setAttribute("data-bs-dismiss", "modal");
    botaoConfirma.textContent = "Deletar";
    botaoConfirma.addEventListener("click", () => {
      ListaNpc.apagarNpc(npcApagar);
      ManipularDom.atualizarLista();
    });
    divBotoes.appendChild(botaoConfirma);
    // <button type="button" class="btn btn-primary">Save changes</button>
    console.log("teste");
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
  static editarNpc(npc) {
    const nome = document.querySelector("#nomeEditar").value;
    const endereco = document.querySelector("#enderecoEditar").value;
    const presenteavel = document.querySelector("#presenteavelEditar").checked;
    const indice = npcs.indexOf(npc);

    if (!presenteavel) {
      document.querySelector("#casavelEditar").checked = false;
      console.log(presenteavel);
    }
    const casavel = document.querySelector("#casavelEditar").checked;
    npc.nome = nome;
    npc.endereco = endereco;

    if (casavel) {
      const presentes = [
        document.querySelector("#presentes1Editar").value,
        document.querySelector("#presentes2Editar").value,
      ];
      const aniversario = document.querySelector("#aniversarioEditar").value;
      const presentesPossiveis = [
        document.querySelector("#presentesPossiveis1Editar").value,
        document.querySelector("#presentesPossiveis2Editar").value,
      ];
      npcs[indice] = new Casavel(
        nome,
        endereco,
        aniversario,
        presentes,
        presentesPossiveis
      );
      // npc.melhoresPresentes = presentes;
      // npc.aniversario = aniversario;
      // npc.presentesPossiveis = presentesPossiveis;
    } else if (presenteavel) {
      const presentes = [
        document.querySelector("#presentes1Editar").value,
        document.querySelector("#presentes2Editar").value,
      ];
      const aniversario = document.querySelector("#aniversarioEditar").value;
      // npc.melhoresPresentes = presentes;
      // npc.aniversario = aniversario;
      npcs[indice] = new Presenteavel(nome, endereco, aniversario, presentes);
    } else {
      delete npcs[indice].melhoresPresentes;
      delete npcs[indice].presentesPossiveis;
      delete npcs[indice].aniversario;
      npcs[indice] = new Npc(nome, endereco);
      console.log(npcs[indice].melhoresPresentes);
    }
  }
  static apagarNpc(npc) {
    console.log(npcs);
    npcs = npcs.filter((e) => {
      return e !== npc;
    });
    console.log(npcs);
  }
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
  if (o instanceof Npc) {
    return "Npc";
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
let npcs = [];
let qtdNpcs = 0;
ManipularDom.init();
