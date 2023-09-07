// ListaNpc.js
import Npc from "./Npc";

export default class ListaNpc {
  static adicionarNpc() {
    const npc = Npc.prototype.toJson(ListaNpc.gerarNpc());
    npcs.push(npc);
    // npcsJson = JSON.stringify(localStorage.getItem("npcs"));
    localStorage.setItem("npcs", JSON.stringify(npcs));
    localStorage.setItem("qtdNpcs", qtdNpcs);
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

module.exports = ListaNpc;
