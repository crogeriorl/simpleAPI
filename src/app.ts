import express from "express";
import "dotenv/config";
import { routes } from "./routes/home.routes";

const app = express();
app.use(express.json());

app.use(routes);

export { app };
