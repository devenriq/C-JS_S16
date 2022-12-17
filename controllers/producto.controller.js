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

const productDelete = async (req, res) => {
  const { id } = req.params;
  const producto = await Producto.findByIdAndDelete(id);
  res.json(producto);
};

const productPut = async (req, res) => {
  const { id } = req.params;
  const { sku, qty, name, price } = req.body;

  const producto = await Producto.findByIdAndUpdate(id, {
    sku,
    qty,
    name,
    price,
  });

  res.status(400).json(producto);
};

export { productoGet, productoPost, productDelete, productPut };
