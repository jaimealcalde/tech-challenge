import { Router } from "express";
import {
    getGifs, addGif, getPetGifs, getSportGifs, getCartoonGifs, getGamingGifs
} from "../controllers/gifController.js";
import upload from "../utils/multer.js";

export const gifRoutes = Router();

// ? GET GIFTS
gifRoutes.get("/", getGifs);

// ? ADD GIFT
gifRoutes.post("/", upload.single("upload"), addGif);

// ? GET PET GIFT
gifRoutes.get("/pet", getPetGifs);

// ? GET SPORT GIFT
gifRoutes.get("/sport", getSportGifs);

// ? GET CARTOON GIFT
gifRoutes.get("/cartoon", getCartoonGifs);

// ? GET GAMING GIFT
gifRoutes.get("/gaming", getGamingGifs);