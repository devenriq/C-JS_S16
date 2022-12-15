const mongoose = require("mongoose");

export const dbConnection = async () => {
  try {
    await mongoose.connect(`mongodb://localhost:27017/Banco`);

    console.log("Base de datos online");
  } catch (error) {
    console.error(error);
    throw new Error("Error al iniciar la base de datos");
  }
};
