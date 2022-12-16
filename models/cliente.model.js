const { Schema, model } = require("mongoose");

const ClientesSchema = new Schema({
  nomb_cliente: {
    type: String,
  },
  telefono: {
    type: Number,
  },
  ciudad: {
    type: String,
  },
  calle: {
    type: String,
  },
  numero: {
    type: Number,
  },
  estado: {
    type: String,
  },
  fecha_nacimiento: {
    type: String,
  },
});

module.exports = model("Cliente", ClientesSchema);
