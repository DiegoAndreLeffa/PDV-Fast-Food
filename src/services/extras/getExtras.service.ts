import { Repository } from "typeorm";
import { Extra, Sandwich } from "../../entities";
import { AppDataSource } from "../../data-source";
import { sandwichReturnAllSchema } from "../../schemas";

export const listAllExtraService = async () => {
  const extraRepository: Repository<Extra> = AppDataSource.getRepository(Extra);

  const allextra = await extraRepository.find({});

  return allextra;
};
