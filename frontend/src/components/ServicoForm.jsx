import { useEffect, useState } from "react";
import { createServico, updateServico } from "../services/api.js";

const ServicoForm = ({
  clientes,
  onSuccess,
  servicoEditando,
  setServicoEditando,
}) => {
  const [servico, setServico] = useState({
    cliente_id: "",
    data: "",
    tipo: "",
    descricao: "",
    valor: "",
    status: "pendente",
  });

  useEffect(() => {
    if (servicoEditando) {
      setServico(servicoEditando);
    }
  }, [servicoEditando]);

  const handleChange = (e) => {
    setServico({ ...servico, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const clienteSelecionado = clientes.find((c) => c.id == servico.cliente_id);

    const playload = {
      ...servico,
      valor: Number(servico.valor),
      cliente_nome: clienteSelecionado?.nome || "",
    };

    if (servicoEditando) {
      await updateServico(playload);
      setServicoEditando(null);
    } else {
      await createServico(playload);
    }

    onSuccess();

    setServico({
      cliente_id: "",
      data: "",
      tipo: "",
      descricao: "",
      valor: "",
      status: "pendente",
    });
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <h2 className="font-bold mb-2">
        {servicoEditando ? "Editar Serviço" : "Novo Serviço"}
      </h2>

      <select
        name="cliente_id"
        value={servico.cliente_id || ""}
        onChange={handleChange}
      >
        <option value="">Selecione o cliente</option>
        {clientes.map((c) => (
          <option key={c.id} value={c.id}>
            {c.nome}
          </option>
        ))}
      </select>

      <input
        type="date"
        name="data"
        value={servico.data}
        onChange={handleChange}
      />
      <input
        type="text"
        name="tipo"
        placeholder="Tipo de serviço"
        value={servico.tipo}
        onChange={handleChange}
      />
      <input
        type="text"
        name="descricao"
        placeholder="Descrição"
        value={servico.descricao}
        onChange={handleChange}
      />
      <input
        type="number"
        name="valor"
        placeholder="Valor"
        value={servico.valor}
        onChange={handleChange}
      />

      <select name="status" value={servico.status} onChange={handleChange}>
        <option value="pendente">Pendente</option>
        <option value="concluido">Concluído</option>
      </select>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
      >
        {servicoEditando ? "Atualizar" : "Cadastrar"}
      </button>
    </form>
  );
};

export default ServicoForm;
