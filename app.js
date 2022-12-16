import express from "express";

import { dbConnection } from "./db/config.js";
import Producto from "./models/productos.model.js";

const app = express();
const port = 3001;

dbConnection();

app.use(express.json());

app.get("/", async (req, res) => {
  const productos = await Producto.find();
  res.json(productos);
});

app.post("/", async (req, res) => {
  const { sku, qty, name, price } = req.body;
  const producto = await new Producto({ sku, qty, name, price });
  await producto.save();
  res.json(producto);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
