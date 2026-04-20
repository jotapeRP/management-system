import { useEffect, useState } from "react";
import ServicoForm from "../components/ServicoForm";
import ServicoTable from "../components/ServicoTable";
import { getServicos } from "../services/api";
import { getClientes } from "../services/api";

const Services = () => {
  const [servicos, setServicos] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [servicoEditando, setServicoEditando] = useState(null);

  async function carregarDados() {
    const servicosData = await getServicos();
    const clientesData = await getClientes();
    setServicos(servicosData);
    setClientes(clientesData);
  }

  useEffect(() => {
    carregarDados();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Serviços</h1>
      <ServicoForm
        clientes={clientes}
        onSuccess={carregarDados}
        onServicoEditando={setServicoEditando}
        setServicoEditando={setServicoEditando}
      />

      <ServicoTable
        servicos={servicos}
        onUpdate={carregarDados}
        onEdit={setServicoEditando}
      />
    </div>
  );
};

export default Services;
