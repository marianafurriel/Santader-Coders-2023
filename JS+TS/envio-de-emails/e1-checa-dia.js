// 1. Criar uma função para verificar o dia da semana atual

function checar_dia(diaDeEnvio) {
  const now = new Date();
  return now.getDay() === diaDeEnvio;
}

module.exports = { checar_dia: checar_dia };
