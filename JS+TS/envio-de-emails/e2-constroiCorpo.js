function construirCorpo(veiculos) {
  const corpo = `Olá, {NOME}!
          Veja nossa ofertas de novos carros:\n
${corpoNovosVeiculos(veiculos)}
          =======================\n
          E agora nossos queridinhos! Os carros mais vendidos:\n
${corpoMaisVendidos(veiculos)}\n`;
  return corpo;
}

function corpoNovosVeiculos(veiculos) {
  let corpo = "";
  for (const novoVeiculo of veiculos.novos) {
    corpo += `          ${novoVeiculo.nomeDoCarro}\n          ${novoVeiculo.condicoesDeAquisicao} \n\n`;
  }
  return corpo;
}

function corpoMaisVendidos(veiculos) {
  let corpo = "";
  for (const maisVendido of veiculos.maisVendidos) {
    corpo += `          ${maisVendido.nomeDoCarro}\n          ${maisVendido.condicoesDeAquisicao}\n\n`;
  }
  return corpo;
}
