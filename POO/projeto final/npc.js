class Npc {
  #nome;
  #endereco;
  #trabalho;
  constructor(nome, endereco, trabalho) {
    this.#nome = nome;
    this.#endereco = endereco;
    this.#trabalho = trabalho;
  }
}

class Presenteaveis extends Npc {
  #aniversario;
  #melhoresPresentes;
  constructor(nome, endereco, trabalho, aniversario, melhoresPresentes) {
    super(nome, endereco, trabalho);
    this.#aniversario = aniversario;
    this.#melhoresPresentes = melhoresPresentes;
  }
}

class Casaveis extends Presenteaveis {
  #presentesPossiveis;
  constructor(
    nome,
    endereco,
    trabalho,
    aniversario,
    melhoresPresentes,
    presentesPossiveis
  ) {
    superconstructor(nome, endereco, trabalho, aniversario, melhoresPresentes);
    this.#presentesPossiveis = presentesPossiveis;
  }
}
