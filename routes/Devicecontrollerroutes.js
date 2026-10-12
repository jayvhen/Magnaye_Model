import express from "express";
import { devicecontroller } from "../controllers/devicecontroller.js";
const router = express.Router();

router.post("/insert", devicecontroller.insert);
router.get("/findall", devicecontroller.findall);
router.get("/findone/:id", devicecontroller.findone);
router.put("/update/:id", devicecontroller.update);
router.delete("/delete/:id", devicecontroller.delete)


export default router;