// Adicionar uma tarefa
// Editar uma tarefa salva
// Remover uma tarefa salva
// Listar todas as tarefas salvas
// Obter uma tarefa, através de um parâmetro (id)

const readline = require("readline");
const prompt = require("prompt-sync")();
let tracos = "-";

const listaTarefas = [
  { id: 1, tarefa: "Fazer a cama" },
  { id: 2, tarefa: "Lavar a louça" },
  { id: 3, tarefa: "Passar roupa" },
  { id: 4, tarefa: "Limpar o banheiro" },
  { id: 5, tarefa: "Varrer o chão" },
  { id: 6, tarefa: "Preparar o jantar" },
  { id: 7, tarefa: "Organizar a despensa" },
  { id: 8, tarefa: "Cuidar das plantas" },
  { id: 9, tarefa: "Passear com o cachorro" },
  { id: 10, tarefa: "Arrumar o quarto" },
];

function adicionar(tarefa) {
  const proxId = listaTarefas.length + 1;
  listaTarefas.push({ id: proxId, tarefa: tarefa }); //isso aqui vai funcionar fora da função? ou precisa retornar e atribuir? R: funciona
  let multiplasTarefas = prompt("Deseja adicionar outra tarefa? S/N ");
  if (multiplasTarefas.toUpperCase() === "S") {
    escolhaMenu(1);
  } else if (multiplasTarefas.toUpperCase() === "N") {
    mostrarMenu();
  } else {
    console.log("Opção inválida!");
    mostrarMenu();
  }
}

function deletar(id) {
  const index = listaTarefas.findIndex((item) => item.id === id);
  if (index !== -1) {
    listaTarefas.splice(index - 1, 1); //Revisar
  }
  exibirLista();
}

function exibirLista() {
  console.log("Lista de tarefas: ");
  listaTarefas.forEach((item) => {
    console.log(`${item.id} : ${item.tarefa}`);
  });
}

function editar(id) {
  // const idTarefa = parseInt(prompt('Digite o ID da tarefa que deseja editar:'));

  const tarefaParaEditar = listaTarefas.find(
    (tarefa) => tarefa.id === parseInt(id)
  );

  if (tarefaParaEditar) {
    const novaTarefa = prompt("Digite a nova tarefa:");
    tarefaParaEditar.tarefa = novaTarefa;
    console.log("Tarefa editada com sucesso!");
    console.log(listaTarefas);
  } else {
    console.log("ID de tarefa inválido.");
  }
}

function retornarPorId(id) {
  const tarefa = listaTarefas.find((item) => item.id === id);
  return tarefa;
}

function sair() {
  console.log("Até mais tarde!\n");
  process.exit();
}

function mostrarMenu() {
  console.log(`\n${tracos.repeat(30)}\n        MENU DE OPÇÕES\n${tracos.repeat(
    30
  )}\n
Escolha a opção desejada digitando sua respectiva numeração: 

1 - Adicionar Tarefa
2 - Editar Tarefa
3 - Remover Tarefa
4 - Listar tarefas
5 - Procurar uma tarefa por id
6 - Procurar uma tarefa
7 - Sair

`);
  let opcao = parseInt(prompt());

  if (isNaN(opcao) || opcao < 1 || opcao > 7) {
    console.log("Opção inválida.");
    return mostrarMenu();
  } else {
    escolhaMenu(opcao);
  }
}

function escolhaMenu(opcao) {
  switch (opcao) {
    case 1:
      let tarefa = prompt("Qual tarefa deseja adicionar a lista? ");
      adicionar(tarefa);
      break;
    case 2:
      id = prompt(
        "Qual tarefa gostaria de editar? Favor digitar o id da mesma "
      );
      editar(id);
      break;
    case 3:
      id = prompt(
        "Qual tarefa gostaria de deletar? Favor digitar o id da mesma "
      );
      deletar(id);
      break;
    case 4:
      exibirLista();
      break;
    case 5:
      id = prompt(
        "Qual tarefa gostaria de procurar? Favor digitar o id da mesma "
      );
      retornarPorId(id);
      break;
    case 6:
      procurarTarefa();
      break;
    case 7:
      sair();
      break;
  }
}

function procurarTarefa() {
  try {
    let tarefa = prompt("Digite uma palavra que tenha no título da tarefa ");
    console.log(listaTarefas.filter((el) => el.tarefa.includes(tarefa)));
    let menu = prompt("Deseja procurar outra tarefa? S/N ");
    if (menu.toUpperCase() === "S") {
      procurarTarefa();
    } else {
      mostrarMenu();
    }
  } catch (e) {
    console.log(e.message);
  }
}

mostrarMenu();
