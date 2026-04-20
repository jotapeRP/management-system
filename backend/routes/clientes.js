const express = require("express");
const router = express.Router();
const db = require("../database");

//Listar
router.get("/", (req, res) => {
  db.all("SELECT * FROM clientes", (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
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

  db.run(
    `INSERT INTO clientes (nome, cpf_cnpj, cep, rua, bairro, numero, cidade, estado, email, telefone) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [nome, cpf_cnpj, cep, rua, bairro, numero, cidade, estado, email, telefone],
    function (err) {
      if (err) return res.status(500).json(err);
      res.json({ id: this.lastID });
    },
  );
});

//Deletar
router.delete("/:id", (req, res) => {
  db.run("DELETE FROM clientes WHERE id = ?", [req.params.id], function (err) {
    if (err) return res.status(500).json(err);
    res.json({ MESSAGE: "Cliente removido com sucesso" });
  });
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

  db.run(
    `UPDATE clientes SET nome = ?, cpf_cnpj = ?, cep = ?, rua = ?, bairro = ?, numero = ?, cidade = ?, estado = ?, email = ?, telefone = ? WHERE id = ?`,
    [
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
    ],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ MESSAGE: "Cliente atualizado com sucesso" });
    },
  );
});

module.exports = router;
