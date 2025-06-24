function registrarEmocao(event) {
  event.preventDefault();
  const data = document.getElementById("data").value;
  const emocao = document.getElementById("emocao").value;
  const descricao = document.getElementById("descricao").value;

  const registro = { data, emocao, descricao };
  let registros = JSON.parse(localStorage.getItem("registros")) || [];
  registros.push(registro);
  localStorage.setItem("registros", JSON.stringify(registros));
  listarEmocoes();
}

function listarEmocoes() {
  const tabela = document.querySelector("#tabela-emocoes tbody");
  const registros = JSON.parse(localStorage.getItem("registros")) || [];
  tabela.innerHTML = "";
  registros.forEach(reg => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${reg.data}</td><td>${reg.emocao}</td><td>${reg.descricao}</td>`;
    tabela.appendChild(tr);
  });
}

function filtrarTabela() {
  const palavra = document.getElementById("busca").value.toLowerCase();
  const inicio = document.getElementById("dataInicio").value;
  const fim = document.getElementById("dataFim").value;
  const tabela = document.querySelector("#tabela-emocoes tbody");
  const registros = JSON.parse(localStorage.getItem("registros")) || [];

  tabela.innerHTML = "";

  registros.forEach(reg => {
    const dentroIntervalo =
      (!inicio || reg.data >= inicio) &&
      (!fim || reg.data <= fim);
    const contemPalavra =
      reg.descricao.toLowerCase().includes(palavra) ||
      reg.emocao.toLowerCase().includes(palavra);

    if (dentroIntervalo && contemPalavra) {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${reg.data}</td><td>${reg.emocao}</td><td>${reg.descricao}</td>`;
      tabela.appendChild(tr);
    }
  });
}

window.onload = listarEmocoes;