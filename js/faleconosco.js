function enviarMensagem(event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  const contato = { nome, email, mensagem };
  localStorage.setItem("contato", JSON.stringify(contato));
  alert("Mensagem enviada com sucesso!");
}