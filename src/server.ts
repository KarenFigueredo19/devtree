import express from "express"; // ESM EcmaScript modules
import "dotenv/config";
import router from "./router";
import { connectDB } from "./config/db"

const app = express(); //Aplicación principal

connectDB();

app.use(express.json()); //Lectura de datos JSON con express
app.use('/', router);

export default app;
