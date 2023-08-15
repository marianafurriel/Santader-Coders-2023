/*
  Faça um programa com uma função chamada somaImposto.
  A função possui dois parâmetros formais: taxaImposto, que é a quantia de imposto sobre vendas expressa em porcentagem e custo, que é o custo de um item antes do imposto. 
  A função “altera” o valor de custo para incluir o imposto sobre vendas.
*/

const somaImposto = (taxaImposto, custo) => {
  const novoValor = (custo * (1 + taxaImposto / 100)).toFixed(2);
  return {
    Custo: custo,
    NovoCusto: Number(novoValor),
  };
};

console.log(somaImposto(10, 100));
