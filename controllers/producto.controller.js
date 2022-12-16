import Producto from "../models/productos.model.js";
const productoGet = async (req, res) => {
  const productos = await Producto.find();
  res.json(productos);
};

const productoPost = async (req, res) => {
  const { sku, qty, name, price } = req.body;
  const producto = await new Producto({ sku, qty, name, price });
  await producto.save();
  res.json(producto);
};

export { productoGet, productoPost };
