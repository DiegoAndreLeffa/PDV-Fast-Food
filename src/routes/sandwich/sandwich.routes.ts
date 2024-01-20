import { Router } from "express";

import { getAllSandwichController } from "../../controllers";

export const sandwichRouter: Router = Router();

sandwichRouter.get("", getAllSandwichController);
