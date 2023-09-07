import Presenteavel from "./Presenteavel";

export default class Casavel extends Presenteavel {
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

module.exports = Casavel;
