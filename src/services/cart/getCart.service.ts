import { Repository } from "typeorm";
import { Cart } from "../../entities";
import { AppDataSource } from "../../data-source";

export const listAllCartService = async () => {
  const cartRepository: Repository<Cart> = AppDataSource.getRepository(Cart);

  const allcart = await cartRepository.find({});

  return allcart;
};
