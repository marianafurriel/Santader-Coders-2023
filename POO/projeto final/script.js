class ControleFormularios {
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
  static exibeFormCasavel() {
    const formCasavel = document.querySelector("#formCasavel");
    const radioCasavel = document.querySelector("#casavel");
    console.log(radioCasavel);
    radioCasavel.addEventListener("click", () => {
      formCasavel.style.display = "block";
    });
    const radioNaoCasavel = document.querySelector("#naoCasavel");
    radioNaoCasavel.addEventListener("click", () => {
      formCasavel.style.display = "none";
    });
  }
}

class ListaNpc {
  #npcs = [];
  static adicionarNpc() {
    const nome = document.querySelector("#nome").value;
    const endereco = document.querySelector("#endereco").value;
    const presenteavel = document.querySelector("#presenteavel").checked;
    const aniversario = document.querySelector("#aniversario").value;
    const casavel = document.querySelector("#casavel").checked;
    const presentesPossiveis1 = document.querySelector(
      "#presentesPossiveis1"
    ).value;
    const presentesPossiveis2 = document.querySelector(
      "#presentesPossiveis2"
    ).value;
    console.log(
      "nome:",
      nome,
      "ende:",
      endereco,
      "presente:",
      presenteavel,
      "niver:",
      aniversario,
      "casavel:",
      casavel,
      "presente1:",
      presentesPossiveis1,
      "presente2:",
      presentesPossiveis2
    );
    const npc = new Npc()
  }
}

ControleFormularios.exibeFormPresenteavel();
ControleFormularios.exibeFormCasavel();
const botaoAdicionar = document.querySelector("#adicionar");
botaoAdicionar.addEventListener("click", () => {
  ListaNpc.adicionarNpc();
});
