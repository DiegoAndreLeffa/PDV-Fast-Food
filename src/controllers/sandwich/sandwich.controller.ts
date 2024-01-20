import { Request, Response } from "express";
import { listAllSandwichsService } from "../../../../../../Nova pasta/services";

export const getAllSandwichController = async (
  request: Request,
  response: Response
) => {
  const allSandwichs = await listAllSandwichsService();

  return response.status(201).json(allSandwichs);
};
