import express from "express";
import { phone } from "../controllers/phone.js";
const router = express.Router();

router.post("/insert", phone.insert);
router.get("/findall", phone.findall);
router.get("/findone/:id", phone.findone);

export default router;