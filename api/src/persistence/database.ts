import { v4 as uuid4 } from 'uuid';
import { Product, ProductEdit } from '../model/product';
import * as mock from './mock';

export const createProduct = async (product: ProductEdit) => {
  let uuid = uuid4();
  while (mock.productMap.has(uuid)) {
    uuid = uuid4();
  }

  const p: Product = {
    uuid: uuid,
    productName: product.productName,
    pricePerKilogram: product.pricePerKilogram,
    pictures: product.pictures,
    colour: product.colour
  };
  mock.productMap.set(uuid, p);
  return p;
};

export const getProducts = async () => {
  return Array.from(mock.productMap.values());
};

export const getProductByUuid = async (uuid: string) => {
  return mock.productMap.get(uuid);
};

export const updateProductByUuid = async (uuid: string, product: ProductEdit) => {
  let p = mock.productMap.get(uuid);
  if (p) {
    p.productName = product.productName || p.productName;
    p.pricePerKilogram = product.pricePerKilogram || p.pricePerKilogram;
    p.pictures = product.pictures || p.pictures;
    p.colour = product.colour || p.colour;

    mock.productMap.set(uuid, p);
  }
  return p;
};

export const deleteProductByUuid = async (uuid: string) => {
  let existed = mock.productMap.delete(uuid);
};
