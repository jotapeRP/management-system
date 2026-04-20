import { deleteServico } from "../services/api";

const ServicoTable = ({ servicos, onUpdate, onEdit }) => {
  async function handleDelete(id) {
    await deleteServico(id);
    onUpdate();
  }

  const getStatusColor = (status) => {
    if (status === "concluido")
      return "bg-green-100 text-green-600 rounded px-2 py-1 rounded";
    if (status === "pendente")
      return "bg-yellow-100 text-yellow-600 rounded px-2 py-1 rounded";
    return "";
  };

  return (
    <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
      <thead>
        <tr>
          <th>Cliente</th>
          <th>Data</th>
          <th>Tipo</th>
          <th>Descrição</th>
          <th>Valor</th>
          <th>Status</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {servicos.map((s) => (
          <tr key={s.id}>
            <td>{s.cliente_nome}</td>
            <td>{s.data}</td>
            <td>{s.tipo}</td>
            <td>{s.descricao}</td>
            <td>R$ {Number(s.valor).toFixed(2)}</td>
            <td>
              <span className={getStatusColor(s.status)}>{s.status}</span>
            </td>
            <td>
              <button onClick={() => onEdit(s)}>Editar</button>
              <button onClick={() => handleDelete(s.id)}>Remover</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ServicoTable;
