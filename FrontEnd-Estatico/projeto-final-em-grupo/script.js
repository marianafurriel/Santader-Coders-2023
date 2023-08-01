// controla as bolinhas do carrossel do header

const bolinhas_carrossel = document.querySelectorAll(".bolinha-carrossel");

bolinhas_carrossel.forEach(element => element.addEventListener("click", handleClickCarrossel))

function handleClickCarrossel() {

  bolinhas_carrossel.forEach((element => {
    element.classList.remove("bolinha-ativa");
    element.classList.remove("active");
  }))

  this.classList.add("bolinha-ativa")
  this.classList.add("active")
}


// filtros do menu
const menu_filtros = document.querySelectorAll(".filtro-menu");

menu_filtros.forEach(element => element.addEventListener("click", filtrarMenu))

const items_menu = document.querySelectorAll(".item-menu");

function filtrarMenu() {
  //criar variavel para evitar o this
  if (!(this.classList.contains("aba-selecionada"))) {
    menu_filtros.forEach((element => {
      element.classList.remove("aba-selecionada");
    }))
    this.classList.add("aba-selecionada")
    items_menu.forEach((elemento)=>{
      elemento.classList.remove("d-none");
      if (
        !(elemento.classList.contains(this.innerText.toLowerCase())) &&
        (this.innerText !== "All")
        ){ //se o elemento não tiver a classe que clicamos e a classe que clicamos nao for All ele é escondido
        elemento.classList.add("d-none");
      }
    })
  }
}

$(document).ready(function(){
  $('select').niceSelect();
});


function adicionadoCarrinho(){
  alert("Produto Adicionado ao Carrinho");
}



function enviar(){
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;
  const pessoas = document.getElementById("pessoas").value;
  const data = document.getElementById("data").value;

  const reserva = `Nome: ${nome}\nTelefone: ${telefone}\nEmail: ${email}\nQuantidade de pessoas: ${pessoas}\nNo dia: ${data}`;

  if(nome != "" || telefone != "" || email != "" || pessoas != "" || data != ""){
    alert("Reserva feita com sucesso");
  }else{
    alert("Preencha todos os campos para fazer uma Reserva!");
  }

  console.log(reserva);
  return reserva;
}



// trocar icone do menu
const icone_menu = document.querySelector(".icone-menu");
icone_menu.addEventListener("click",trocaIconeMenu);
function trocaIconeMenu(){
  this.classList.toggle("fa-times");
  this.classList.toggle("fa-bars");

}