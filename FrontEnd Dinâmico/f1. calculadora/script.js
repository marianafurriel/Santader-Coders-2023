const numeros = document.querySelectorAll(".number");
const operadores = document.querySelectorAll(".operator");
const numeroAtual = document.querySelector(".visor");
const limpar = document.querySelector(".resetar");
let operacao = "";
let ultimoCaracterEhOperador = false;
let primeiro_num;

const igual = document.querySelector("#botao-igual");
igual.addEventListener("click", () => {
  resolver();
});

numeros.forEach((num) =>
  num.addEventListener("click", () => {
    adicionarNumero(num.textContent);
  })
);

operadores.forEach((operador) =>
  operador.addEventListener("click", () => {
    if (!operacao) {
      operacao = operador.textContent;
      ultimoCaracterEhOperador = true;
      primeiro_num = parseFloat(numeroAtual.textContent);
    }
  })
);

function adicionarNumero(num) {
  if (numeroAtual.textContent.length == 14) {
    return;
  }
  if (numeroAtual.textContent === "0") {
    numeroAtual.textContent = num;
    return;
  }
  if (num === "." && numeroAtual.textContent.includes(".")) {
    return;
  }
  if (ultimoCaracterEhOperador) {
    numeroAtual.textContent = num;
    ultimoCaracterEhOperador = false;
    return;
  }
  numeroAtual.textContent = numeroAtual.textContent + num;
}

function resolver() {
  console.log(operacao);
  switch (operacao) {
    case "-":
      numeroAtual.textContent =
        primeiro_num - parseFloat(numeroAtual.textContent);
      primeiro_num = "";
      break;
    case "+":
      numeroAtual.textContent =
        primeiro_num + parseFloat(numeroAtual.textContent);
      primeiro_num = "";
      break;
    case "/":
      if (numeroAtual.textContent !== "0") {
        numeroAtual.textContent =
          primeiro_num / parseFloat(numeroAtual.textContent);
        primeiro_num = "";
      }
      break;
    case "*":
      numeroAtual.textContent =
        primeiro_num * parseFloat(numeroAtual.textContent);
      primeiro_num = "";
      break;
  }
}
