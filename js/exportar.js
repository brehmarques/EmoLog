function exportarRegistros() {
  const registros = JSON.parse(localStorage.getItem("registros")) || [];
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(registros, null, 2));
  const dlAnchorElem = document.createElement("a");
  dlAnchorElem.setAttribute("href", dataStr);
  dlAnchorElem.setAttribute("download", "registros-emolog.json");
  dlAnchorElem.click();
}