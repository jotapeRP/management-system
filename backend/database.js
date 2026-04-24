const Database = require("better-sqlite3");
const db = new Database("./database.db");

db.prepare(
  `
    CREATE TABLE IF NOT EXISTS clientes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT,
      cpf_cnpj TEXT,
      cep TEXT,
      rua TEXT,
      bairro TEXT,
      numero TEXT,
      cidade TEXT,
      estado TEXT,
      email TEXT,
      telefone TEXT
    )
  `,
).run();

db.prepare(
  `
  CREATE TABLE IF NOT EXISTS servicos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    cliente_id INTEGER,
    cliente_nome TEXT,
    data TEXT,
    tipo TEXT,
    descricao TEXT,
    valor REAL,
    status TEXT
  )
`,
).run();

module.exports = db;
