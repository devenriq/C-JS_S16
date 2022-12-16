const { Schema, model } = require("mongoose");

const ProductoSchema = new Schema({
  sku: {
    type: String,
  },
  qty: {
    type: Number,
  },
  name: {
    type: String,
  },
  price: {
    type: String,
  },
});

module.exports = model("Producto", ProductoSchema);
