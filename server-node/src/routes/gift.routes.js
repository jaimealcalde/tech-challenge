import { Router } from "express";
import {
    getGifts, addGift
} from "../controllers/giftController.js";
import upload from "../utils/multer.js";

export const giftRoutes = Router();

// ? GET GIFTS
giftRoutes.get("/", getGifts);

// ? ADD GIFT
giftRoutes.post("/", upload.single("upload"), addGift);