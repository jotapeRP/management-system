const express = require("express");
const router = express.Router();
const db = require("../database");

//Listar
router.get("/", (req, res) => {
  const rows = db.prepare("SELECT * FROM clientes").all();
  res.json(rows);
});

//Criar
router.post("/", (req, res) => {
  const {
    nome,
    cpf_cnpj,
    cep,
    rua,
    bairro,
    numero,
    cidade,
    estado,
    email,
    telefone,
  } = req.body;

  const result = db
    .prepare(
      `INSERT INTO clientes (nome, cpf_cnpj, cep, rua, bairro, numero, cidade, estado, email, telefone) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    )
    .run(
      nome,
      cpf_cnpj,
      cep,
      rua,
      bairro,
      numero,
      cidade,
      estado,
      email,
      telefone,
    );
  res.json({ id: result.lastInsertRowid });
});

//Deletar
router.delete("/:id", (req, res) => {
  db.prepare("DELETE FROM clientes WHERE id = ?").run(req.params.id);
  res.json({ MESSAGE: "Cliente removido com sucesso" });
});

//Atualizar
router.put("/:id", (req, res) => {
  const {
    nome,
    cpf_cnpj,
    cep,
    rua,
    bairro,
    numero,
    cidade,
    estado,
    email,
    telefone,
  } = req.body;

  db.prepare(
    `UPDATE clientes SET nome = ?, cpf_cnpj = ?, cep = ?, rua = ?, bairro = ?, numero = ?, cidade = ?, estado = ?, email = ?, telefone = ? WHERE id = ?`,
  ).run(
    nome,
    cpf_cnpj,
    cep,
    rua,
    bairro,
    numero,
    cidade,
    estado,
    email,
    telefone,
    req.params.id,
  );
  res.json({ MESSAGE: "Cliente atualizado com sucesso" });
});

module.exports = router;
