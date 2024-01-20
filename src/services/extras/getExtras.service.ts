import { Repository } from "typeorm";
import { Extra } from "../../entities";
import { AppDataSource } from "../../dataSource";

export const listAllExtraService = async () => {
  const extraRepository: Repository<Extra> = AppDataSource.getRepository(Extra);

  const allextra = await extraRepository.find({});

  return allextra;
};
