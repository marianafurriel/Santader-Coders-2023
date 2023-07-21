const botaoDeEnvio = document.getElementById("btnEnviar");
botaoDeEnvio.addEventListener('click',trocarAriaLabel);

function trocarAriaLabel() {
  if (
    botaoDeEnvio.getAttribute("aria-label") ===
    "Botão para envio de formulário"
  ) {
    botaoDeEnvio.setAttribute(
      "aria-label",
      "Botao para reenvio de formulario"
    );
  }
}