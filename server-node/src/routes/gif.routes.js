import { Router } from "express";
import {
    getGifs, addGif
} from "../controllers/gifController.js";
import upload from "../utils/multer.js";

export const gifRoutes = Router();

// ? GET GIFTS
gifRoutes.get("/", getGifs);

// ? ADD GIFT
gifRoutes.post("/", upload.single("upload"), addGif);