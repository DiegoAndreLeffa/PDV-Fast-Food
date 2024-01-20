import { Router } from "express";

import { getAllExtraController } from "../../controllers";

export const extraRouter: Router = Router();

extraRouter.get("", getAllExtraController);
