const construirCorpo = (veiculos) => {
  const corpo = `Olá, {NOME}!
Veja nossa ofertas de novos carros:\n
${corpoNovosVeiculos(veiculos)}
=======================\n
E agora nossos queridinhos! Os carros mais vendidos:\n
${corpoMaisVendidos(veiculos)}`;
  return corpo;
};

const corpoNovosVeiculos = (veiculos) => {
  let corpo = "";
  for (const novoVeiculo of veiculos.novos) {
    corpo += `${novoVeiculo.nomeDoCarro}\n  ${novoVeiculo.condicoesDeAquisicao} \n\n`;
  }
  return corpo;
};

const corpoMaisVendidos = (veiculos) => {
  let corpo = "";
  for (const maisVendido of veiculos.maisVendidos) {
    corpo += `${maisVendido.nomeDoCarro}\n  ${maisVendido.condicoesDeAquisicao} \n\n`;
  }
  return corpo;
};

module.exports = { construirCorpo: construirCorpo };
