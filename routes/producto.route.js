import { Router } from "express";
import {
  productoPost,
  productoGet,
  productDelete,
  productPut,
} from "../controllers/producto.controller.js";
const router = Router();

router.get("/", productoGet);

router.post("/", productoPost);

router.delete("/:id", productDelete);

router.put("/:id", productPut);

export default router;
