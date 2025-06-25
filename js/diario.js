document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formDiario");
  const lista = document.getElementById("listaRegistros");

  function carregarRegistros() {
    const registros = JSON.parse(localStorage.getItem("registros")) || [];
    lista.innerHTML = "";
    registros.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.texto} ${item.arquivo ? `(Arquivo: ${item.arquivo})` : ""}`;
      lista.appendChild(li);
    });
  }

  if (formulario) {
    formulario.addEventListener("submit", function (e) {
      e.preventDefault();
      const texto = document.getElementById("campoTexto").value;
      const arquivoInput = document.getElementById("arquivo");
      const arquivo = arquivoInput.files[0] ? arquivoInput.files[0].name : null;

      const novoRegistro = { texto, arquivo };
      const registros = JSON.parse(localStorage.getItem("registros")) || [];
      registros.push(novoRegistro);
      localStorage.setItem("registros", JSON.stringify(registros));

      alert("Entrada registrada com sucesso!");
      formulario.reset();
      carregarRegistros();
    });

    carregarRegistros(); 
  }
});

function selecionarEmoji(emoji) {
  const campo = document.getElementById("campoTexto");
  if (campo) {
    campo.value += emoji;
  }
}
