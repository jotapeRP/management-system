const express = require("express");
const cors = require("cors");

const app = express();

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
