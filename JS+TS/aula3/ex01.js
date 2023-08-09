const lista = [];
const listaPar = [];
const listaImpar = [];

for (let index = 0; index < 20; index++) {
  const num = Math.floor(Math.random() * 100);
  num in lista ? index-- : (lista[index] = num);
}

for (let i = 0; i < lista.length; i++) {
  lista[i] % 2 === 0 ? listaPar.push(lista[i]) : listaImpar.push(lista[i]);
}

console.log(
  `Lista -> ${lista}\n${listaPar} -> pares\n${listaImpar} -> impares`
);
