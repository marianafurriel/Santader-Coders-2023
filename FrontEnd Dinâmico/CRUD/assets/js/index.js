login.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("logado", 1);
  window.location.href = "./dashboard.html";
});

// localStorage.setItem(
//   "url",
//   JSON.stringify(
//     "https://crudcrud.com/api/949c4aaf8acd474b98964424eeb3d4bb/produtos"
//   )
// );
