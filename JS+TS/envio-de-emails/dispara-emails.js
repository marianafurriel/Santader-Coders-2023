const { checar_opcao } = require("./checa-opcao");
const { checar_dia } = require("./checa-dia");
const { enviarEmail } = require("./envia-email");
const { construirCorpo } = require("./constroiCorpo");

const listaClientes = [
  { nome: "Ana", email: "ana_42@gmail.com", receberNotificacoes: true },
  {
    nome: "Carlos",
    email: "carlos_91@hotmail.com",
    receberNotificacoes: false,
  },
  { nome: "Maria", email: "maria_18@yahoo.com", receberNotificacoes: true },
  { nome: "Pedro", email: "pedro_27@outlook.com", receberNotificacoes: false },
  { nome: "Lúcia", email: "lucia_58@gmail.com", receberNotificacoes: true },
  { nome: "João", email: "joao_12@yahoo.com", receberNotificacoes: false },
  {
    nome: "Catarina",
    email: "catarina_76@hotmail.com",
    receberNotificacoes: true,
  },
  {
    nome: "Miguel",
    email: "miguel_89@outlook.com",
    receberNotificacoes: false,
  },
  { nome: "Sofia", email: "sofia_7@gmail.com", receberNotificacoes: true },
  { nome: "Rafael", email: "rafael_39@yahoo.com", receberNotificacoes: false },
  { nome: "Isabel", email: "isabel_53@gmail.com", receberNotificacoes: true },
  {
    nome: "Gustavo",
    email: "gustavo_82@hotmail.com",
    receberNotificacoes: false,
  },
  { nome: "Luísa", email: "luisa_64@yahoo.com", receberNotificacoes: true },
  { nome: "André", email: "andre_20@outlook.com", receberNotificacoes: false },
  { nome: "Camila", email: "camila_71@gmail.com", receberNotificacoes: true },
  { nome: "Eduardo", email: "eduardo_4@yahoo.com", receberNotificacoes: false },
  { nome: "Clara", email: "clara_67@hotmail.com", receberNotificacoes: true },
  { nome: "Bruno", email: "bruno_32@gmail.com", receberNotificacoes: false },
  { nome: "Laura", email: "laura_5@outlook.com", receberNotificacoes: true },
  {
    nome: "Ricardo",
    email: "ricardo_73@yahoo.com",
    receberNotificacoes: false,
  },
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
const subject = "Subject";
const body = construirCorpo(veiculos);
let bodyCliente = "";

const disparar_emails = (listaClientes) => {
  listaClientes.forEach((cliente) => {
    bodyCliente = body.replace("{NOME}", cliente.nome);
    if (checar_opcao(cliente)) enviarEmail(cliente.email, subject, bodyCliente);
  });
};

if (checar_dia(diaDeEnvio)) {
  disparar_emails(listaClientes);
}
