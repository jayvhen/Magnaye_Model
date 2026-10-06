import express from "express";
import {yuri} from "../controllers/yuri.js";
const router = express.Router();

router.post("/insert", yuri.insert);
router.get("/findall", yuri.findall);
router.get("/findone/:id", yuri.findone);

export default router;