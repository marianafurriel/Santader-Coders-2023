if (localStorage.getItem("logado") !== "1") {
  window.location.href = "./index.html";
}

localStorage.setItem(
  "url",
  JSON.stringify(
    "https://crudcrud.com/api/541b7aced1fb4617b87a5d27d1bc890c/produtos"
  )
);
