import { Request, Response } from "express";
import { listAllExtraService } from "../../services";

export const getAllExtraController = async (
  request: Request,
  response: Response
) => {
  const allExtra = await listAllExtraService();

  return response.status(201).json(allExtra);
};
