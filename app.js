const express = require("express");

const { dbConnection } = require("./db/config");
const Cliente = require("./models/cliente.model");

const app = express();
const port = 3001;

dbConnection();

app.get("/", async (req, res) => {
  const usuarios = await Cliente.find();
  res.json(usuarios);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
