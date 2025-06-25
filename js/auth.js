function fazerCadastro(event) {
  event.preventDefault();
  const email = document.getElementById("cadastroEmail").value;
  const senha = document.getElementById("cadastroSenha").value;
  const user = { email, senha };
  localStorage.setItem("usuario", JSON.stringify(user));
  alert("Cadastro realizado com sucesso!");
  window.location.href = "login.html";
}

function fazerLogin(event) {
  event.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const senha = document.getElementById("loginSenha").value;
  const user = JSON.parse(localStorage.getItem("usuario"));

  if (user && user.email === email && user.senha === senha) {
    localStorage.setItem("logado", "true");
    window.location.href = "diario.html";
  } else {
    alert("E-mail ou senha incorretos.");
  }
}

function verificarLogin() {
  const logado = localStorage.getItem("logado");
  if (!logado || logado !== "true") {
    alert("Você precisa estar logado para acessar essa página.");
    window.location.href = "login.html";
  }
}

function sair() {
  localStorage.removeItem("logado");
  window.location.href = "login.html";
}