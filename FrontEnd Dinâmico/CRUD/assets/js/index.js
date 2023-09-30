login.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("logado", 1);
  window.location.href = "./dashboard.html";
});

localStorage.setItem(
  "url",
  JSON.stringify(
    "https://crudcrud.com/api/68cd77799c5046af9581011ce49dc856/produtos"
  )
);
