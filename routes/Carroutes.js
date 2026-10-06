import express from "express";
import { car } from "../controllers/car.js";
const router = express.Router();

router.post("/insert", car.insert);
router.get("/findall", car.findall);
router.get("/findone/:id", car.findone);

export default router;