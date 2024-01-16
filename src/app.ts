import "express-async-errors";
import cors from "cors";
import { handleErrors } from "./errors";
import express, { Application } from "express";

const app: Application = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(handleErrors);
export default app;
