if (localStorage.getItem("logado") !== "1") {
  window.location.href = "./index.html";
}

localStorage.setItem(
  "url",
  JSON.stringify(
    "https://crudcrud.com/api/8b8a9fe8642c42edb14ba048e69d4c55/produtos"
  )
);
