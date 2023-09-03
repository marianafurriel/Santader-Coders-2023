class Item {
  #vendivel;
  #ouro;
  #nome;
  constructor(vendivel, ouro = 0, nome) {
    this.vendivel = vendivel;
    this.ouro = ouro;
    this.nome = nome;
  }
}

class Ferramentas extends Item {
  #encantamento;
  #material;
  constructor(vendivel, ouro, nome, encantamento, material) {
    super(vendivel, ouro, nome);
    this.encantamento = encantamento;
    this.material = material;
  }
}

class Peixes extends Item {
  #qualidade;
  #tipo;
  #localizacao;
  constructor(vendivel, ouro, nome, qualidade, tipo, localizacao) {
    super(vendivel, ouro, nome);
    this.qualidade = qualidade;
    this.tipo = tipo;
    this.localizacao = localizacao;
  }
}

class Minerais extends Item {
  #tipo;
  #localizacao;
  constructor(vendivel, ouro, nome, qualidade, raridade, localizacao) {
    super(vendivel, ouro, nome);
    this.qualidade = qualidade;
    this.raridade = raridade;
    this.localizacao = localizacao;
  }
}

class Plantacoes extends Item {
  #estacao;
  #qualidade;
  #tempoColheita;
  constructor(vendivel, ouro, nome, qualidade, estacao, tempoColheita) {
    super(vendivel, ouro, nome);
    this.estacao = estacao;
    this.qualidade = qualidade;
    this.tempoColheita = tempoColheita;
  }
}
