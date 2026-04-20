import { useState, useEffect } from "react";
import { createCliente, updateCliente } from "../services/api.js";

const ClientForm = ({ onSuccess, clienteEditando, setClienteEditando }) => {
  const [client, setClient] = useState({
    nome: "",
    cpf_cnpj: "",
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
    email: "",
    telefone: "",
  });

  useEffect(() => {
    if (clienteEditando) {
      setClient(clienteEditando);
    }
  }, [clienteEditando]);

  const handleChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (clienteEditando) {
      await updateCliente(clienteEditando.id, client);
      setClienteEditando(null);
    } else {
      await createCliente(client);
    }

    onSuccess();
    setClient({
      nome: "",
      cpf_cnpj: "",
      cep: "",
      rua: "",
      numero: "",
      bairro: "",
      cidade: "",
      estado: "",
      email: "",
      telefone: "",
    });
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        name="nome"
        placeholder="Nome"
        className="border p-2 rounded w-full mb-2"
        value={client.nome}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="cpf_cnpj"
        placeholder="CPF/CNPJ"
        className="border p-2 rounded w-full mb-2"
        value={client.cpf_cnpj}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="cep"
        placeholder="CEP: 00000-000"
        className="border p-2 rounded w-full mb-2"
        value={client.cep}
        onChange={handleChange}
        onBlur={(e) => buscarCep(e.target.value)}
        required
      />
      <input
        type="text"
        name="rua"
        placeholder="Rua"
        className="border p-2 rounded w-full mb-2"
        value={client.rua}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="numero"
        placeholder="Número"
        className="border p-2 rounded w-full mb-2"
        value={client.numero}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="bairro"
        placeholder="Bairro"
        className="border p-2 rounded w-full mb-2"
        value={client.bairro}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="cidade"
        placeholder="Cidade"
        className="border p-2 rounded w-full mb-2"
        value={client.cidade}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="estado"
        placeholder="Estado"
        className="border p-2 rounded w-full mb-2"
        value={client.estado}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="border p-2 rounded w-full mb-2"
        value={client.email}
        onChange={handleChange}
      />
      <input
        type="tel"
        name="telefone"
        placeholder="Telefone"
        className="border p-2 rounded w-full mb-2"
        value={client.telefone}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
      >
        {clienteEditando ? "Atualizar" : "Cadastrar"}
      </button>
    </form>
  );
};

export default ClientForm;
