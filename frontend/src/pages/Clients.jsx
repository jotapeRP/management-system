import { useEffect, useState } from "react";
import ClientForm from "../components/ClientForm";
import ClientTable from "../components/ClientTable";
import { getClientes } from "../services/api";

const Clients = () => {
  const [clientes, setClientes] = useState([]);
  const [clienteEditando, setClienteEditando] = useState(null);

  async function carregarClientes() {
    const data = await getClientes();
    setClientes(data);
  }

  useEffect(() => {
    carregarClientes();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Clientes</h1>
      <ClientForm
        onSuccess={carregarClientes}
        clienteEditando={clienteEditando}
        setClienteEditando={setClienteEditando}
      />
      <ClientTable
        clients={clientes}
        onUpdate={carregarClientes}
        onEdit={setClienteEditando}
      />
    </div>
  );
};

export default Clients;
