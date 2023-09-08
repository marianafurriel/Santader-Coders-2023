// Npc.js
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

// Presenteavel.js
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

// Casavel.js
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

// ManipularDom.js
class ManipularDom {
  static init() {
    ManipularDom.atualizarLista();
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
      npcAtual = Npc.prototype.toObject(npcAtual);
      // console.log("npc atual: ", npcAtual);
      const divNpc = document.createElement("div");
      const divFlex = document.createElement("div");
      const divEsquerda = document.createElement("div");
      divEsquerda.classList.add("esquerda");
      divFlex.classList.add("npc-flex");
      divNpc.classList.add("npc");

      // span do nome do npc
      const nomeSpan = document.createElement("span");
      nomeSpan.id = "nomeSpan";
      nomeSpan.classList.add("nomeSpan");
      nomeSpan.textContent = `${npcAtual.nome}`;

      //span endereço
      const enderecoSpan = document.createElement("span");
      enderecoSpan.id = "enderecoSpan";
      enderecoSpan.classList.add("spanDados", "enderecoSpan");

      enderecoSpan.textContent = `${npcAtual.endereco}`;

      //span aniversario
      const aniversarioSpan = document.createElement("span");
      aniversarioSpan.id = "aniversarioSpan";
      aniversarioSpan.classList.add("spanDados", "aniversarioSpan");

      //spans presentes
      const presente1Span = document.createElement("span");
      presente1Span.id = "presente1Span";
      presente1Span.classList.add("spanDados", "presente1Span");

      const presente2Span = document.createElement("span");
      presente2Span.id = "presente2Span";
      presente2Span.classList.add("spanDados", "presente2Span");

      //span casavel
      const casavelSpan = document.createElement("span");
      casavelSpan.id = "casavelSpan";
      casavelSpan.classList.add("spanDados", "casavelSpan");

      //span presentes possiveis
      const presentePossivel1Span = document.createElement("span");
      presentePossivel1Span.id = "presentePossivel1Span";
      presentePossivel1Span.classList.add("spanDados", "presentePossivel1Span");

      const presentePossivel2Span = document.createElement("span");
      presentePossivel2Span.id = "presentePossivel2Span";
      presentePossivel2Span.classList.add("spanDados", "presentePossivel2Span");

      //checando se é presenteavel ou casavel
      switch (Npc.prototype.instancia(npcAtual)) {
        case "Casavel":
          // console.log(npcAtual);
          aniversarioSpan.textContent = npcAtual.aniversario;
          casavelSpan.textContent = "Sim";
          presente1Span.textContent = npcAtual.melhoresPresentes[0];
          presente2Span.textContent = npcAtual.melhoresPresentes[1];
          presentePossivel1Span.textContent = npcAtual.presentesPossiveis[0];
          presentePossivel2Span.textContent = npcAtual.presentesPossiveis[1];
          break;
        case "Presenteavel":
          // console.log(npcAtual);
          aniversarioSpan.textContent = npcAtual.aniversario;
          presente1Span.textContent = npcAtual.melhoresPresentes[0];
          presente2Span.textContent = npcAtual.melhoresPresentes[1];
          break;
        default:
          casavelSpan.textContent = "Não";
        // console.log(npcAtual);
      }

      //cria botao de editar
      const buttonEditar = document.createElement("button");
      buttonEditar.type = "button";
      buttonEditar.classList.add("botaoEditar", "botao");
      buttonEditar.setAttribute("data-bs-toggle", "modal");
      buttonEditar.setAttribute("data-bs-target", "#exampleModal");
      buttonEditar.textContent = "Editar";
      buttonEditar.addEventListener("click", () => {
        ManipularDom.formularioEdicao(npcAtual);
      });

      const buttonDeletar = document.createElement("button");
      buttonDeletar.classList.add("botaoDeletar", "botao");
      buttonDeletar.setAttribute("data-bs-toggle", "modal");
      buttonDeletar.setAttribute("data-bs-target", "#confirmaDelecao");
      buttonDeletar.textContent = "Deletar";
      buttonDeletar.addEventListener("click", () => {
        ManipularDom.modalDelecao(npcAtual);
        // ListaNpc.apagarNpc(npcAtual);
        // ManipularDom.atualizarLista();
      });
      // Crie a estrutura do div NPC e aninhe os elementos criados
      divNpc.appendChild(divFlex);
      divFlex.appendChild(divEsquerda);
      divEsquerda.appendChild(nomeSpan);
      divEsquerda.appendChild(enderecoSpan);
      divEsquerda.appendChild(aniversarioSpan);
      divEsquerda.appendChild(presente1Span);
      divEsquerda.appendChild(presente2Span);
      divEsquerda.appendChild(presentePossivel1Span);
      divEsquerda.appendChild(presentePossivel2Span);

      const divBotoes = document.createElement("div");
      divBotoes.classList.add("botoes");
      divBotoes.appendChild(buttonEditar);
      divBotoes.appendChild(buttonDeletar);

      divNpc.appendChild(divBotoes);

      // Agora você pode adicionar o divNpc ao seu documento onde desejar

      divNpcs.appendChild(divNpc);
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
    salvarEdicao.classList.add("botaoEditar", "botao");
    salvarEdicao.textContent = "Save changes";
    salvarEdicao.addEventListener("click", () => {
      ListaNpc.editarNpc(npcEditar);
      ListaNpc.atualizaLocalStorage();
      ManipularDom.resetarFormulario();
      ManipularDom.atualizarLista();
    });

    const closeModal = document.createElement("button");
    closeModal.setAttribute("type", "button");
    closeModal.setAttribute("data-bs-dismiss", "modal");
    closeModal.classList.add("botaoCancelar", "botao");
    closeModal.textContent = "Cancelar";
    // closeModal.addEventListener("click", () => {
    //   divFooterModal.innerHTML = "";
    // });
    divFooterModal.appendChild(closeModal);
    divFooterModal.appendChild(salvarEdicao);
  }
  static resetarFormulario() {
    const formularios = [...document.querySelectorAll(".formulario")];
    formularios.forEach((form) => form.reset());
    const formCasavel = document.querySelector("#formCasavel");
    const formPresenteavel = document.querySelector("#formPresenteavel");
    formCasavel.style.display = "none";
    formPresenteavel.style.display = "none";
  }
  static modalDelecao(npcApagar) {
    const divBotoes = document.querySelector(".modal-footer-delecao");
    divBotoes.innerHTML = "";
    document.querySelector(
      ".p-confirmar-delecao"
    ).textContent = `Deseja mesmo deletar o NPC ${npcApagar.nome}?`;
    const botaoConfirma = document.createElement("button");
    botaoConfirma.classList.add("btn", "btn-danger", "botao");
    botaoConfirma.setAttribute("data-bs-dismiss", "modal");
    botaoConfirma.textContent = "Deletar";
    botaoConfirma.addEventListener("click", () => {
      ListaNpc.apagarNpc(npcApagar);
      // qtdNpcs--;
      ManipularDom.atualizarLista();
    });
    const botaoCancelar = document.createElement("button");
    botaoCancelar.setAttribute("type", "button");
    botaoCancelar.setAttribute("data-bs-dismiss", "modal");
    botaoCancelar.classList.add("botaoCancelar", "botao");
    botaoCancelar.textContent = "Cancelar";
    divBotoes.appendChild(botaoCancelar);
    divBotoes.appendChild(botaoConfirma);
  }
}

// ListaNpc.js
class ListaNpc {
  static atualizaLocalStorage() {
    localStorage.setItem("npcs", JSON.stringify(npcs));
    // localStorage.setItem("qtdNpcs", qtdNpcs);
  }
  static adicionarNpc() {
    const npc = Npc.prototype.toJson(ListaNpc.gerarNpc());
    npcs.push(npc);
    ListaNpc.atualizaLocalStorage();
    // qtdNpcs++;
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
    let indice = 0;
    for (let i = 0; i < npcs.length; i++) {
      if (Npc.prototype.equals(npcs[i], npc)) {
        indice = i;
        break;
      }
    }
    // console.log(indice);

    if (!presenteavel) {
      document.querySelector("#casavelEditar").checked = false;
    }
    const casavel = document.querySelector("#casavelEditar").checked;
    // console.log("casavel? ", casavel);
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
      // delete npcs[indice].melhoresPresentes;
      // delete npcs[indice].presentesPossiveis;
      // delete npcs[indice].aniversario;
      // console.log(npcs[indice].aniversario);
      npcs[indice] = new Npc(nome, endereco);
      // console.log("presetens : ", npcs[indice].presentesPossiveis);
    }
    // console.log("instancia de npc? ", npcs[indice] instanceof Npc);
    // console.log("instancia de casavel? ", npcs[indice] instanceof Casavel);
    // console.log(
    // "instancia de presenteavel? ",
    // npcs[indice] instanceof Presenteavel
    // );
  }
  static apagarNpc(npc) {
    npc = Npc.prototype.toJson(npc);
    npcs = npcs.filter((e) => JSON.stringify(e) !== JSON.stringify(npc));
    ListaNpc.atualizaLocalStorage();
  }
}

Npc.prototype.instancia = function (objeto) {
  if (objeto instanceof Casavel) {
    return "Casavel";
  } else if (objeto instanceof Presenteavel) {
    return "Presenteavel";
  } else if (objeto instanceof Npc) {
    return "Npc";
  }
};

Npc.prototype.toJson = function (objeto) {
  if (objeto instanceof Casavel) {
    return {
      nome: objeto.nome,
      endereco: objeto.endereco,
      aniversario: objeto.aniversario,
      melhoresPresentes: objeto.melhoresPresentes,
      presentesPossiveis: objeto.presentesPossiveis,
    };
  } else if (objeto instanceof Presenteavel) {
    return {
      nome: objeto.nome,
      endereco: objeto.endereco,
      aniversario: objeto.aniversario,
      melhoresPresentes: objeto.melhoresPresentes,
    };
  }
  if (objeto instanceof Npc) {
    return {
      nome: objeto.nome,
      endereco: objeto.endereco,
    };
  }
};

Npc.prototype.toObject = function (objetoLiteral) {
  if (objetoLiteral.presentesPossiveis) {
    return new Casavel(
      objetoLiteral.nome,
      objetoLiteral.endereco,
      objetoLiteral.aniversario,
      objetoLiteral.melhoresPresentes,
      objetoLiteral.presentesPossiveis
    );
  } else if (objetoLiteral.aniversario) {
    return new Presenteavel(
      objetoLiteral.nome,
      objetoLiteral.endereco,
      objetoLiteral.aniversario,
      objetoLiteral.melhoresPresentes
    );
  } else {
    return new Npc(objetoLiteral.nome, objetoLiteral.endereco);
  }
};

Npc.prototype.equals = function (obj1, obj2) {
  const instanciaObj1 = Npc.prototype.instancia(obj1);
  console.log("inst obj1: ", instanciaObj1);
  console.log("inst obj2: ", Npc.prototype.instancia(obj2));
  if (instanciaObj1 !== Npc.prototype.instancia(obj2)) {
    return false;
  }
  if (obj1.nome === obj2.nome && obj1.endereco === obj2.endereco) {
    if (
      instanciaObj1 === "Casavel" &&
      JSON.stringify(obj1.presentesPossiveis) ===
        JSON.stringify(obj2.presentesPossiveis)
    ) {
      return true;
    } else if (
      instanciaObj1 === "Presenteavel" &&
      obj1.aniversario === obj2.aniversario &&
      JSON.stringify(obj1.melhoresPresentes) ===
        JSON.stringify(obj2.melhoresPresentes)
    ) {
      return true;
    } else if (instanciaObj1 === "Npc") {
      return true;
    }
  }
  return false;
};

if (!localStorage.getItem("npcs")) {
  localStorage.setItem("npcs", JSON.stringify([]));
}
let npcs = JSON.parse(localStorage.getItem("npcs"));
ManipularDom.init();
