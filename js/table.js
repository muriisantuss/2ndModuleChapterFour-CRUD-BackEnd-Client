let clients = [];
loadClients();

function save() {
  let getClients =
    {
      id: clients.length + 1,
      name: document.getElementById("name").value + " " + document.getElementById("lastname").value,
      address: document.getElementById("address").value,
      cep: document.getElementById("cep").value,
      neighborhood: document.getElementById("neighborhood").value,
      city: document.getElementById("city").value,
      state: document.getElementById("state").value,
    }


  addNewRow(getClients)
  clients.push(getClients)
  document.getElementById("form").reset()
}

function loadClients() {
  for(let get of clients){
    addNewRow(get)
  }
}

function addNewRow(c) {
  var table = document.getElementById("registrationTable");
  let newRow = table.insertRow();


  const id = document.createTextNode(c.id);
  newRow.insertCell().appendChild(id);

  const name = document.createTextNode(c.name);
  newRow.insertCell().appendChild(name);

  const address = document.createTextNode(c.address);
  newRow.insertCell().appendChild(address);

  const cep = document.createTextNode(c.cep);
  newRow.insertCell().appendChild(cep);

  const neighborhood = document.createTextNode(c.neighborhood);
  newRow.insertCell().appendChild(neighborhood);

  const city = document.createTextNode(c.city);
  newRow.insertCell().appendChild(city);

  const state = document.createTextNode(c.state);
  newRow.insertCell().appendChild(state);
}
