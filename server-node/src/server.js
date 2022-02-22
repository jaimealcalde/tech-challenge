import express from "express";
import morgan from "morgan";
import config from "./config/config.js";
import cors from "cors";

//import { userGifts } from "./routes/gift.routes.js";

const app = express();

//?middlewares

app.use(morgan("dev"));
app.use(express.json());
app.use(
    cors({
        origin: process.env.CLIENT_URL,
    })
);

//?routes

//app.use("/api/gift", userGifts);

export default app;