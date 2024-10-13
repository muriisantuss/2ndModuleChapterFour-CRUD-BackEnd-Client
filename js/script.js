$("#cep").mask("99.999-999");
$("#number").mask("999999");

function validationCep() {
  var cep = document.getElementById("cep").value;
  cep = cep.replace(/[.-]/g, "");
  let uri = `https://viacep.com.br/ws/${cep}/json/`;

  $.getJSON(uri, (set) => {
    if (set.erro) {
      showError("CEP não encontrado");
      isValidCep = false; 
    } else {
      insertValueOnInput(set);
      isValidCep = true; 
    }
  }).fail(() => {
    showError("CEP inválido");
    isValidCep = false; 
  });
}

function insertValueOnInput(set) {
  showError("");
  document.getElementById("address").value = `${set.logradouro}`;
  document.getElementById("neighborhood").value = `${set.bairro}`;
  document.getElementById("city").value = `${set.localidade}`;
  document.getElementById("state").value = `${set.estado}`;
  document.getElementById("number").removeAttribute("readonly");
}

function clearValueOnInput() {
  document.getElementById("address").value = "";
  document.getElementById("neighborhood").value = "";
  document.getElementById("city").value = "";
  document.getElementById("state").value = "";
  document.getElementById("number").setAttribute("readonly", "readonly");
}

function showError(msg) {
  clearValueOnInput();
  document.getElementById("errorMessage").innerHTML = msg;
}
