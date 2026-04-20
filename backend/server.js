const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const clientesRouter = require("./routes/clientes");
const servicosRouter = require("./routes/servicos");

app.use("/clientes", clientesRouter);
app.use("/servicos", servicosRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
