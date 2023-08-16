// 3. Criar uma função para enviar o e-mail para cada um dos clientes da lista, levando em conta a sua decisão sobre receber comunicações de marketing.

const checar_opcao = (cliente) => {
  return cliente.notificacoes;
};

module.exports = { checar_opcao: checar_opcao };
