const { checar_opcao } = require("./checa-opcao");
const { checar_dia } = require("./checa-dia");
const { enviarEmail } = require("./envia-email");

const listaClientes = [
  { clientes: "Ana", email: "ana_42@gmail.com", marketing: true },
  { clientes: "Carlos", email: "carlos_91@hotmail.com", marketing: false },
  { clientes: "Maria", email: "maria_18@yahoo.com", marketing: true },
  { clientes: "Pedro", email: "pedro_27@outlook.com", marketing: false },
  { clientes: "Lúcia", email: "lucia_58@gmail.com", marketing: true },
  { clientes: "João", email: "joao_12@yahoo.com", marketing: false },
  { clientes: "Catarina", email: "catarina_76@hotmail.com", marketing: true },
  { clientes: "Miguel", email: "miguel_89@outlook.com", marketing: false },
  { clientes: "Sofia", email: "sofia_7@gmail.com", marketing: true },
  { clientes: "Rafael", email: "rafael_39@yahoo.com", marketing: false },
  { clientes: "Isabel", email: "isabel_53@gmail.com", marketing: true },
  { clientes: "Gustavo", email: "gustavo_82@hotmail.com", marketing: false },
  { clientes: "Luísa", email: "luisa_64@yahoo.com", marketing: true },
  { clientes: "André", email: "andre_20@outlook.com", marketing: false },
  { clientes: "Camila", email: "camila_71@gmail.com", marketing: true },
  { clientes: "Eduardo", email: "eduardo_4@yahoo.com", marketing: false },
  { clientes: "Clara", email: "clara_67@hotmail.com", marketing: true },
  { clientes: "Bruno", email: "bruno_32@gmail.com", marketing: false },
  { clientes: "Laura", email: "laura_5@outlook.com", marketing: true },
  { clientes: "Ricardo", email: "ricardo_73@yahoo.com", marketing: false },
];

const diaDeEnvio = 0;
const subject = "subject";
const body = "body";

const disparar_emails = (listaClientes) => {
  listaClientes.forEach((cliente) => {
    if (checar_opcao(cliente)) enviarEmail(cliente.email, subject, body);
  });
};

if (checar_dia(diaDeEnvio)) {
  disparar_emails(listaClientes);
}
