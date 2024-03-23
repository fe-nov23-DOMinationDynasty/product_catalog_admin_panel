import { Product } from '@prisma/client';
import prisma from '../utils/db';

const PRODUCT_NOT_FOUND_ERROR = 'Product not found';

export const getAll = async () => {
  return await prisma.product.findMany();
};

export const getById = async (id: string) => {
  const product = await prisma.product.findFirst({ where: { id } });

  if (!product) {
    throw new Error(PRODUCT_NOT_FOUND_ERROR);
  }

  return product;
};

export const destroy = async (id: string) => {
  const productToDelete = await prisma.product.findFirst({ where: { id } });

  if (!productToDelete) {
    throw new Error(PRODUCT_NOT_FOUND_ERROR);
  }

  return await prisma.product.delete({ where: { id } });
};

export const update = async (id: string, updatedFields: Partial<Product>) => {
  const productToUpdate = await prisma.product.findFirst({ where: { id } });

  if (!productToUpdate) {
    throw new Error(PRODUCT_NOT_FOUND_ERROR);
  }

  await prisma.product.update({
    where: { id },
    data: {
      ...productToUpdate,
      ...updatedFields,
    },
  });

  return {
    ...productToUpdate,
    ...updatedFields,
  };
};
