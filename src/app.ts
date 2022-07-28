import "dotenv/config";
import "./database/mongoDB";
import express from "express";
import { routes } from "./routes/home.routes";

const app = express();
app.use(express.json());

app.use(routes);

export { app };
