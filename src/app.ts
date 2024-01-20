import "express-async-errors";
import cors from "cors";
import { handleErrors } from "./errors";
import express, { Application } from "express";
import { sandwichRouter, extraRouter, cartRouter } from "./routes";

const app: Application = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/sandwich", sandwichRouter);
app.use("/extra", extraRouter);
app.use("/cart", cartRouter);
app.use(handleErrors);
export default app;
