import { Repository } from "typeorm";
import { AppDataSource } from "../../dataSource";
import { Cart } from "../../entities";
import { AppError } from "../../errors";

export const deleteCartService = async (cartId: any) => {
  const cartRepository: Repository<Cart> = AppDataSource.getRepository(Cart);

  const cartToDelete = await cartRepository.findOne({
    where: { id: cartId },
  });

  if (!cartToDelete) {
    throw new AppError(`Carrinho com ID ${cartId} não encontrado.`, 404);
  }

  const deleteCart = await cartRepository.delete({ id: cartId });

  return deleteCart;
};
