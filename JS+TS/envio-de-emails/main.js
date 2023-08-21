const { enviarEmail } = require("./envia-email");

const listaClientes = [
  { nome: "Ana", email: "ana_42@gmail.com", notificacoes: true },
  { nome: "Carlos", email: "carlos_91@hotmail.com", notificacoes: false },
  { nome: "Maria", email: "maria_18@yahoo.com", notificacoes: true },
  { nome: "Pedro", email: "pedro_27@outlook.com", notificacoes: false },
  { nome: "Lúcia", email: "lucia_58@gmail.com", notificacoes: true },
  { nome: "João", email: "joao_12@yahoo.com", notificacoes: false },
  { nome: "Catarina", email: "catarina_76@hotmail.com", notificacoes: true },
  { nome: "Miguel", email: "miguel_89@outlook.com", notificacoes: false },
  { nome: "Sofia", email: "sofia_7@gmail.com", notificacoes: true },
  { nome: "Rafael", email: "rafael_39@yahoo.com", notificacoes: false },
  { nome: "Isabel", email: "isabel_53@gmail.com", notificacoes: true },
  { nome: "Gustavo", email: "gustavo_82@hotmail.com", notificacoes: false },
  { nome: "Luísa", email: "luisa_64@yahoo.com", notificacoes: true },
  { nome: "André", email: "andre_20@outlook.com", notificacoes: false },
  { nome: "Camila", email: "camila_71@gmail.com", notificacoes: true },
  { nome: "Eduardo", email: "eduardo_4@yahoo.com", notificacoes: false },
  { nome: "Clara", email: "clara_67@hotmail.com", notificacoes: true },
  { nome: "Bruno", email: "bruno_32@gmail.com", notificacoes: false },
  { nome: "Laura", email: "laura_5@outlook.com", notificacoes: true },
  { nome: "Ricardo", email: "ricardo_73@yahoo.com", notificacoes: false },
];

const veiculos = {
  novos: [
    {
      nomeDoCarro: "Toyota Corolla",
      condicoesDeAquisicao: "Financiamento a partir de 1.19% de juros",
    },
    {
      nomeDoCarro: "Honda Civic",
      condicoesDeAquisicao: "Leasing com parcelas flexíveis",
    },
    {
      nomeDoCarro: "Volkswagen Golf",
      condicoesDeAquisicao: "Compra à vista com desconto especial",
    },
  ],
  maisVendidos: [
    {
      nomeDoCarro: "Chevrolet Onix",
      condicoesDeAquisicao: "Financiamento com entrada reduzida",
    },
    {
      nomeDoCarro: "Ford Ranger",
      condicoesDeAquisicao: "Compra à vista com bônus de acessórios",
    },
    {
      nomeDoCarro: "Volkswagen Polo",
      condicoesDeAquisicao: "Leasing com assistência 24 horas",
    },
  ],
};

const diaDeEnvio = 1;
const subject = "Marketing";
const body = construirCorpo(veiculos);

//1
function checar_dia(diaDeEnvio) {
  const now = new Date();
  return now.getDay() === diaDeEnvio;
}

//2
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

//3
function envia_para_cliente(cliente) {
  if (cliente.notificacoes) {
    const bodyCliente = body.replace("{NOME}", cliente.nome);
    enviarEmail(cliente.email, subject, bodyCliente);
  }
  return cliente.notificacoes;
}

if (checar_dia(diaDeEnvio)) {
  listaClientes.forEach((cliente) => envia_para_cliente(cliente));
}
