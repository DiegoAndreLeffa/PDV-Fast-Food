import { Router } from "express";

import {
  deleteCartController,
  getCartController,
  postCartController,
  updateCartController,
} from "../../controllers";

export const cartRouter: Router = Router();

cartRouter.post("", postCartController);
cartRouter.get("", getCartController);
cartRouter.patch("/:id", updateCartController);
cartRouter.delete("/:id", deleteCartController);
