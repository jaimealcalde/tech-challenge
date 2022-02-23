import express from "express";
import morgan from "morgan";
import cors from "cors";
import "dotenv/config";

import { gifRoutes } from "./routes/gif.routes.js";

const app = express();

//?middlewares

app.use(morgan("dev"));
app.use(express.json());
app.use(
    cors({
        origin: process.env.CLIENT_URL,
    })
);
console.log( process.env.CLIENT_URL)

//?routes

app.use("/api/gif", gifRoutes);

export default app;