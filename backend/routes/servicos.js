const express = require("express");
const router = express.Router();
const db = require("../database");

//Listar
router.get("/", (req, res) => {
  console.log("GET /servicos");
  db.all("SELECT * FROM servicos", (err, rows) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json(rows);
  });
});

//Criar
router.post("/", (req, res) => {
  try {
    console.log("CHEGOU NA ROTA /servicos");
    console.log("BODY:", req.body);

    const { cliente_id, cliente_nome, data, tipo, descricao, valor, status } =
      req.body;

    db.run(
      `INSERT INTO servicos 
      (cliente_id, cliente_nome, data, tipo, descricao, valor, status) 
      VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [cliente_id, cliente_nome, data, tipo, descricao, Number(valor), status],
      function (err) {
        if (err) {
          console.error("🔥 ERRO SQL:", err.message);
          return res.status(500).json({ error: err.message });
        }

        res.json({ id: this.lastID });
      },
    );
  } catch (error) {
    console.error("🔥 ERRO GERAL:", error);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
});

//Deletar
router.delete("/:id", (req, res) => {
  db.run("DELETE FROM servicos WHERE id = ?", [req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ MESSAGE: "Serviço removido com sucesso" });
  });
});

//Atualizar
router.put("/:id", (req, res) => {
  const { cliente_id, cliente_nome, data, tipo, descricao, valor, status } =
    req.body;

  db.run(
    `UPDATE servicos SET cliente_id = ?, cliente_nome = ?, data = ?, tipo = ?, descricao = ?, valor = ?, status = ? WHERE id = ?`,
    [
      cliente_id,
      cliente_nome,
      data,
      tipo,
      descricao,
      valor,
      status,
      req.params.id,
    ],
    (err) => {
      if (err) {
        console.error("ERRO SQL:", err.message);
        console.error(
          "DADOS:",
          cliente_id,
          cliente_nome,
          data,
          tipo,
          descricao,
          valor,
          status,
        );
        return res.status(500).json(err);
      }

      res.json({ MESSAGE: "Serviço atualizado com sucesso" });
    },
  );
});

module.exports = router;
