import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Cart } from "../../entities";
import { AppError } from "../../errors";

export const updateCartService = async (cartId: any) => {
  const cartRepository: Repository<Cart> = AppDataSource.getRepository(Cart);

  const cartToUpdate = await cartRepository.findOne({
    where: { id: cartId },
  });

  if (!cartToUpdate) {
    throw new AppError(`Carrinho com ID ${cartId} não encontrado.`, 404);
  }

  cartToUpdate.status = "Finalizado";

  const updatedCart = await cartRepository.save(cartToUpdate);

  return updatedCart;
};
