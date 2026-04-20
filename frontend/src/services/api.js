const API_URL = "http://localhost:3000";

//Clientes

export async function getClientes() {
  const res = await fetch(`${API_URL}/clientes`);
  return res.json();
}

export async function createCliente(cliente) {
  await fetch(`${API_URL}/clientes`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(cliente),
  });
}

export async function deleteCliente(id) {
  await fetch(`${API_URL}/clientes/${id}`, {
    method: "DELETE",
  });
}

export async function updateCliente(id, cliente) {
  await fetch(`${API_URL}/clientes/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(cliente),
  });
}

//Serviços
export async function getServicos() {
  const res = await fetch(`${API_URL}/servicos`);
  return res.json();
}

export async function createServico(servico) {
  await fetch(`${API_URL}/servicos`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(servico),
  });
}

export async function deleteServico(id) {
  await fetch(`${API_URL}/servicos/${id}`, {
    method: "DELETE",
  });
}

export async function updateServico(id, servico) {
  await fetch(`${API_URL}/servicos/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(servico),
  });
}
