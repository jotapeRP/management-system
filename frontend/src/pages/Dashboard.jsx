import { useEffect, useState } from "react";
import { getClientes, getServicos } from "../services/api";

const Dashboard = () => {
  const [clients, setClients] = useState([]);
  const [servicos, setServicos] = useState([]);

  useEffect(() => {
    carregarDados();
  }, []);

  async function carregarDados() {
    const clientesData = await getClientes();
    const servicosData = await getServicos();
    setClients(clientesData);
    setServicos(servicosData);
  }

  const hoje = new Date().toISOString().split("T")[0];

  const servicosHoje = servicos.filter((s) => s.data === hoje);

  const faturamentoHoje = servicosHoje
    .filter((s) => s.status === "concluido")
    .reduce((total, s) => total + Number(s.valor || 0), 0);

  const pendentes = servicos.filter((s) => s.status === "pendente");
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <p>Clientes</p>
          <h2 className="text-2xl font-bold">{clients.length}</h2>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <p>Serviços hoje</p>
          <h2 className="text-2xl font-bold">{servicosHoje.length}</h2>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <p>Faturamento hoje</p>
          <h2 className="text-2xl font-bold">R$ {faturamentoHoje}</h2>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <p>Serviços pendentes</p>
          <h2 className="text-2xl font-bold">{pendentes.length}</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
