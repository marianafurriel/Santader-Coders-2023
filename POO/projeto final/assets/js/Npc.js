// Npc.js
export default class Npc {
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
