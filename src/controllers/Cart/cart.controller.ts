import { Request, Response } from "express";
import {
  deleteCartService,
  listAllCartService,
  postCartService,
  updateCartService,
} from "../../../../../../Nova pasta/services";

export const postCartController = async (
  request: Request,
  response: Response
) => {
  const newCart = await postCartService(request.body);

  return response.status(201).json(newCart);
};

export const getCartController = async (
  request: Request,
  response: Response
) => {
  const getCart = await listAllCartService();

  return response.status(201).json(getCart);
};

export const updateCartController = async (
  request: Request,
  response: Response
) => {
  const upCart = await updateCartService(request.params.id);

  return response.status(201).json(upCart);
};

export const deleteCartController = async (
  request: Request,
  response: Response
) => {
  const deleteCart = await deleteCartService(request.params.id);

  return response.status(201).json(deleteCart);
};
