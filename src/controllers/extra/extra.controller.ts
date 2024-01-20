import { Request, Response } from "express";
import {
  listAllExtraService,
  listAllSandwichsService,
} from "../../../../../../Nova pasta/services";

export const getAllExtraController = async (
  request: Request,
  response: Response
) => {
  const allExtra = await listAllExtraService();

  return response.status(201).json(allExtra);
};
