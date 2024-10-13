function validationCep() {
  var cep = document.getElementById("cep").value;
  let uri = `https://viacep.com.br/ws/${cep}/json/`;

  $.getJSON(uri, (set) => {
    insertValueOnInput(set);
  })
}

function insertValueOnInput(set) {
  console.log(set);
  document.getElementById("endereco").value = `${set.logradouro}`;
  document.getElementById("bairro").value = `${set.bairro}`;
  document.getElementById("cidade").value = `${set.localidade}`;
  document.getElementById("estado").value = `${set.estado}`;
  document.getElementById("numero").removeAttribute("readonly")
}

