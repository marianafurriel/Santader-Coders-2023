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