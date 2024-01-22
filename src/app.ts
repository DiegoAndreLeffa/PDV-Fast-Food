import "express-async-errors";
import cors from "cors";
import { handleErrors } from "./errors";
import express, { Application } from "express";
import swaggerUi from "swagger-ui-express";

import { sandwichRouter, extraRouter, cartRouter } from "./routes";

import swaggerDocs from "./swagger.json";

const app: Application = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/sandwich", sandwichRouter);
app.use("/extra", extraRouter);
app.use("/cart", cartRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(handleErrors);

export default app;
