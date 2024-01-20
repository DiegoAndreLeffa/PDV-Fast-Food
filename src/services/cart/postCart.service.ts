import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Cart } from "../../entities";

export const postCartService = async (cartData: any) => {
  const cartRepository: Repository<Cart> = AppDataSource.getRepository(Cart);

  const newCart = cartRepository.create({
    codigo: cartData.codigo,
    nome: cartData.nome,
    itens: cartData.itens,
    primeiraImagem: cartData.primeiraImagem,
    troco: cartData.troco,
    valorEntregue: cartData.valorEntregue,
  });

  const savedCart = await cartRepository.save(newCart);

  return savedCart;
};
