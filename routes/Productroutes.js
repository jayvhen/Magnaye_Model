import express from "express";
import { product } from "../controllers/product.js";
const router = express.Router();

router.post("/insert", product.insert);
router.get("/findall", product.findall);
router.get("/findone/:id", product.findone);

export default router;