import { Router } from "express";
import {
  productoPost,
  productoGet,
} from "../controllers/producto.controller.js";
const router = Router();

router.get("/", productoGet);

router.post("/", productoPost);

export default router;
