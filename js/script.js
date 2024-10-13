$("#cep").mask("99.999-999");

function validationCep() {
  var cep = document.getElementById("cep").value;
  cep = cep.replace(/[.-]/g, "");
  let uri = `https://viacep.com.br/ws/${cep}/json/`;

  $.getJSON(uri, (set) => {
    if (set.erro) {
      showError("CEP não encontrado");
    } else {
      insertValueOnInput(set);
    }
  }).fail(() => {
    showError("CEP inválido");
  });
}

function insertValueOnInput(set) {
  showError("");
  document.getElementById("endereco").value = `${set.logradouro}`;
  document.getElementById("bairro").value = `${set.bairro}`;
  document.getElementById("cidade").value = `${set.localidade}`;
  document.getElementById("estado").value = `${set.estado}`;
  document.getElementById("numero").removeAttribute("readonly");
}

function clearValueOnInput() {
  document.getElementById("endereco").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("estado").value = "";
  document.getElementById("numero").setAttribute("readonly", "readonly");
}

function showError(msg) {
  clearValueOnInput();
  document.getElementById("errorMessage").innerHTML = msg;
}
