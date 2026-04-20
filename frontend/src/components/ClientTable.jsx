import { deleteCliente } from "../services/api";

const ClientTable = ({ clients, onUpdate, onEdit }) => {
  async function handleDelete(id) {
    await deleteCliente(id);
    onUpdate();
  }
  return (
    <table className="w-full bg-white">
      <thead>
        <tr>
          <th className="p-2">Nome</th>
          <th className="p-2">Telefone</th>
          <th className="p-2">Ações</th>
        </tr>
      </thead>
      <tbody>
        {clients.map((client) => (
          <tr key={client.id} className="border-t">
            <td className="p-2">{client.nome}</td>
            <td className="p-2">{client.telefone}</td>
            <td className="p-2">
              <button
                onClick={() => onEdit(client)}
                className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(client.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Remover
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ClientTable;
