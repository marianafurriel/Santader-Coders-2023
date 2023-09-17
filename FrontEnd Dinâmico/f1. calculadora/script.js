const numeroAtual = document.querySelector(".visor");
const limpar = document.querySelector(".resetar");
limpar.addEventListener("click", resetar);

const backspace = document.querySelector(".backspace");
backspace.addEventListener("click", apagar);

let operacao = "";
let ultimoCaracterEhOperador = false;
let primeiro_num;

const igual = document.querySelector("#botao-igual");
igual.addEventListener("click", () => {
  resolver();
});

const numeros = document.querySelectorAll(".number");
numeros.forEach((num) =>
  num.addEventListener("click", () => {
    adicionarNumero(num.textContent);
  })
);

const operadores = document.querySelectorAll(".operator");
operadores.forEach((operador) =>
  operador.addEventListener("click", () => {
    if (!ultimoCaracterEhOperador) {
      operacao = operador.textContent;
      ultimoCaracterEhOperador = true;
      primeiro_num = parseFloat(numeroAtual.textContent);
      console.log(primeiro_num);
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
      primeiro_num = parseFloat(numeroAtual.textContent);
      break;
    case "+":
      numeroAtual.textContent =
        primeiro_num + parseFloat(numeroAtual.textContent);
      primeiro_num = parseFloat(numeroAtual.textContent);
      break;
    case "/":
      if (numeroAtual.textContent !== "0") {
        numeroAtual.textContent =
          primeiro_num / parseFloat(numeroAtual.textContent);
        primeiro_num = parseFloat(numeroAtual.textContent);
      }
      break;
    case "x":
      numeroAtual.textContent =
        primeiro_num * parseFloat(numeroAtual.textContent);
      primeiro_num = parseFloat(numeroAtual.textContent);
      break;
  }
  if (numeroAtual.textContent > 20) {
    numeroAtual.classList.remove("background-laranja");
    numeroAtual.classList.add("background-verde");
  } else {
    numeroAtual.classList.remove("background-verde");
    numeroAtual.classList.add("background-laranja");
  }
}

function resetar() {
  numeroAtual.textContent = 0;
  operacao = "";
  primeiro_num = "";
  ultimoCaracterEhOperador = false;
}

function apagar() {
  if (numeroAtual.textContent.length == 1) {
    numeroAtual.textContent = 0;
  } else {
    numeroAtual.textContent = numeroAtual.textContent.substring(
      0,
      numeroAtual.textContent.length - 1
    );
  }
}
