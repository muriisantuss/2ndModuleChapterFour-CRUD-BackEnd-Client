let clients = [];
let isValidCep = false;
loadClients();

function save() {
  if (!isValidCep) {
    showError("Cadastro bloqueado: CEP inválido ou não encontrado.");
    return; 
  }

  let getClients = {
    id: clients.length + 1,
    name:
      document.getElementById("name").value +
      " " +
      document.getElementById("lastname").value,
    address: document.getElementById("address").value,
    number: document.getElementById("number").value,
    cep: document.getElementById("cep").value,
    neighborhood: document.getElementById("neighborhood").value,
    city: document.getElementById("city").value,
    state: document.getElementById("state").value,
  };
  addNewRow(getClients);
  clients.push(getClients);
  document.getElementById("form").reset();
  showError("");
}

function loadClients() {
  for (let get of clients) {
    addNewRow(get);
  }
}

function addNewRow(c) {
  const table = document.getElementById("registrationTable");
  const newRow = table.insertRow();

  const createCell = (content, className = "") => {
    const cell = newRow.insertCell();
    cell.textContent = content;
    if (className) {
      cell.className = className;
    }
    return cell;
  };

  const { id, name, address, number, cep, neighborhood, city, state } = c;

  createCell(id);
  createCell(name);
  createCell(address, "d-none d-md-table-cell");
  createCell(number, "d-none d-md-table-cell");
  createCell(cep);
  createCell(neighborhood, "d-none d-md-table-cell");
  createCell(city);
  createCell(state, "d-none d-md-table-cell");
}
