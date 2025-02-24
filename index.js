const express = require("express");
const cors = require("cors");
const port = 3000;

const app = express();

app.use(cors({ credentials: true, origin: "*" }));
app.use(express.json());

const notesRoutes = require("./routes/notesRoutes");
app.use("/notes", notesRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
