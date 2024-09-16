const express = require("express");
const router = require("./routes/route");

// Configura o servidor
const app = express();
const port = 40000;

app.use(express.json());
app.use(router);

// Inicia o servidor
app.listen(port, () => {
  console.log(`app listening at port ${port}`);
});
