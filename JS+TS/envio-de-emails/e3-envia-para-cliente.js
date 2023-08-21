function envia_para_cliente(cliente) {
  if (cliente.notificacoes) {
    const bodyCliente = body.replace("{NOME}", cliente.nome);
    enviarEmail(cliente.email, subject, bodyCliente);
  }
  return cliente.notificacoes;
}
