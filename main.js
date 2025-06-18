document.addEventListener("DOMContentLoaded", function() {
  fetch("dados.json")
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("conteudo-principal");
      container.innerHTML = "";
      data.mensagens.forEach(msg => {
        const p = document.createElement("p");
        p.textContent = msg;
        container.appendChild(p);
      });
    })
    .catch(error => console.error("Erro ao carregar JSON:", error));
});
