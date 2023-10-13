import { baseServices } from "../baseServices";

export const getProducts = async () => {
  return baseServices.getAll("/products");
};

export const getByProductId = async (productId) => {
    return baseServices.getById('/products', productId);
  };