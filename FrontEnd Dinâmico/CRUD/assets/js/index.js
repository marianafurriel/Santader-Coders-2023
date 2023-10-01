login.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("logado", 1);
  window.location.href = "./dashboard.html";
});
