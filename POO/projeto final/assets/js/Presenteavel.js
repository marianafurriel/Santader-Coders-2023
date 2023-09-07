import Npc from "./Npc";

export default class Presenteavel extends Npc {
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

module.exports = Presenteavel;
