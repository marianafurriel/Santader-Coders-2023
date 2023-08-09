// EXERCICIO
// Você foi convidado para desenvolver um script para realizar os sorteios para uma casa
// de apostas (estilo mega sena). O sorteio consiste em 6 dezenas aleatórias, entre 1 e 60.
// Para gerar um número aleatório, pode-se utilizar o método random(), da biblioteca Math:
// Math.round(Math.random() * 10)

function sorteiaDezenas(maximo) {
  return Math.round(Math.random() * maximo);
}

function megaSena() {
  const dezenas = [];
  while (dezenas.length < 6) {
    cont++;
    const dezenaAleatoria = sorteiaDezenas(60);

    if (!dezenas.includes(dezenaAleatoria)) dezenas.push(dezenaAleatoria);
  }
  return dezenas;
}

console.log(megaSena());
