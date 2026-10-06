import express from "express";
import {book } from "../controllers/book.js";
const router = express.Router();

router.post("/insert", book.insert);
router.get("/findall", book.findall);
router.get("/findone/:id", book.findone);

export default router;