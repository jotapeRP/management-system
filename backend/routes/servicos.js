const express = require("express");
const router = express.Router();
const db = require("../database");

//Listar
router.get("/", (req, res) => {
  console.log("GET /servicos");
  const rows = db.prepare("SELECT * FROM servicos").all();
  res.json(rows);
});

//Criar
router.post("/", (req, res) => {
  try {
    console.log("CHEGOU NA ROTA /servicos");
    console.log("BODY:", req.body);

    const { cliente_id, cliente_nome, data, tipo, descricao, valor, status } =
      req.body;

    const result = db
      .prepare(
        `INSERT INTO servicos (cliente_id, cliente_nome, data, tipo, descricao, valor, status) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      )
      .run(cliente_id, cliente_nome, data, tipo, descricao, valor, status);
    res.json({ id: result.lastInsertRowid });
  } catch (error) {
    console.error("🔥 ERRO GERAL:", error);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
});

//Deletar
router.delete("/:id", (req, res) => {
  db.prepare(`DELETE FROM servicos WHERE id = ?`).run(req.params.id);
  res.json({ MESSAGE: "Serviço deletado com sucesso" });
});

//Atualizar
router.put("/:id", (req, res) => {
  const { cliente_id, cliente_nome, data, tipo, descricao, valor, status } =
    req.body;

  db.prepare(
    `UPDATE servicos SET cliente_id = ?, cliente_nome = ?, data = ?, tipo = ?, descricao = ?, valor = ?, status = ? WHERE id = ?`,
  ).run(
    cliente_id,
    cliente_nome,
    data,
    tipo,
    descricao,
    valor,
    status,
    req.params.id,
  );
  res.json({ MESSAGE: "Serviço atualizado com sucesso" });
});

module.exports = router;
