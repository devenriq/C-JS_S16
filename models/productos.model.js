import { Schema, model } from "mongoose";

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

export default model("Producto", ProductoSchema);
