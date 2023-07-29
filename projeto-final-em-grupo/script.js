const bolinhas_carrossel = document.querySelectorAll(".bolinha-carrossel");

bolinhas_carrossel.forEach(element => element.addEventListener("click",handleClick))

function handleClick(){

  bolinhas_carrossel.forEach((element =>{
    element.classList.remove("bolinha-ativa");
  }))

  this.classList.add("bolinha-ativa")
}