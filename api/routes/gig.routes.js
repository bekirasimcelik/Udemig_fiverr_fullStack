import express from "express";
import {
  createGig,
  deleteGig,
  getAllGigs,
  getGig,
} from "../controllers/gig.controller.js";

// Router oluştur
const router = express.Router();
express.Router();

// Yolları Tanımla
router.get("/", getAllGigs);
router.get("/:id", getGig);
router.post("/", createGig);
router.delete("/:id", deleteGig);

// export et ve server.js'e yanıt ver
export default router;
