// EXERCICIO
// Você foi convidado para desenvolver um script para realizar os sorteios para uma casa
// de apostas (estilo mega sena). O sorteio consiste em 6 dezenas aleatórias, entre 1 e 60.
// Para gerar um número aleatório, pode-se utilizar o método random(), da biblioteca Math:
// Math.round(Math.random() * 10)

function sorteiaDezenas(maximo) {
  return Math.floor(Math.random() * maximo + 1);
}

function megaSena() {
  const dezenas = [];
  while (dezenas.length < 6) {
    const dezenaAleatoria = sorteiaDezenas(60);

    if (!dezenas.includes(dezenaAleatoria)) dezenas.push(dezenaAleatoria);
  }
  return dezenas;
}

// console.log(megaSena());

const array = [1, 2, 3];
const array2 = ["4", "5", "6"];
let array3 = array.concat(array2);
let soma = 0;
for (let index = 0; index < array3.length; index++) {
  soma += array3[index];
}

console.log(soma);
