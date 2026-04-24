process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
});

process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection", err);
});

console.log("Iniciando o servidor...");

const express = require("express");
const cors = require("cors");

const app = express();

app.get("/teste", (req, res) => {
  res.send("ok");
});

app.use(cors({ origin: "*" }));
app.use(express.json());

const clientesRouter = require("./routes/clientes");
const servicosRouter = require("./routes/servicos");

app.use("/clientes", clientesRouter);
app.use("/servicos", servicosRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("API funcionando");
});
