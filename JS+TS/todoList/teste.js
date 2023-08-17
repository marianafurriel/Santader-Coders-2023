const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let teste = "teste";
// Pergunta ao usuário
rl.question("Digite algo: ", (answer) => {
  teste = answer;

  // Fecha a interface readline após a leitura
  rl.close();
});

console.log(teste);
