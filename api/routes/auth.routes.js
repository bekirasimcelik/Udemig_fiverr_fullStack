import express from "express";
import { login, logout, register } from "../controllers/auth.controller.js";

//* 1) Router Oluştur
const router = express.Router();

//* 2) Yolları Belirle
router.post("/register", register);

router.post("login", login);

router.post("logout", logout);

//* 3) router'ı app'e tanıtmak için export
export default router;
