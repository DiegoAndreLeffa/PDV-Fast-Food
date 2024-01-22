import { Repository } from "typeorm";
import { Sandwich } from "../../entities";
import { AppDataSource } from "../../data-source";
import { sandwichReturnAllSchema } from "../../schemas";
import { tSandwichResAll } from "../../interfaces";

export const listAllSandwichsService = async (): Promise<tSandwichResAll> => {
  const sandwichRepository: Repository<Sandwich> =
    AppDataSource.getRepository(Sandwich);

  const allSandwichs = await sandwichRepository.find({});

  const sandwichs = sandwichReturnAllSchema.parse(allSandwichs);

  return sandwichs;
};
