const { Schema, model } = requiere("mongoose");

const ClienteSchema = new Schema({
  nomb_cliente: {
    type: String,
    required: [true, "El nombre es obligatorio"],
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

export default model("Cliente", ClienteSchema);
