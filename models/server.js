import express from "express";
import { dbConnection } from "../db/config.js";
import routerProducto from "../routes/producto.route.js";
export class Server {
  constructor() {
    this.app = express();
    this.port = 3001;
    this.connectDB();
    this.middlewares();
    this.routes();
  }

  async connectDB() {
    await dbConnection();
  }
  middlewares() {
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/api/producto", routerProducto);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Example app listening at http://localhost:${this.port}`);
    });
  }
}
