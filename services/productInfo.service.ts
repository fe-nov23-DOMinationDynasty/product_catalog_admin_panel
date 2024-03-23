import { ProductInfo } from '@prisma/client';
import { ProductInfo as ProductInfoInterface } from '../src/types/ProductInfo';
import prisma from '../utils/db';
import * as descriptionService from './description.service';

const PRODUCT_INFO_NOT_FOUND_ERROR = 'Product info not found';

export const getAll = async () => {
  return await prisma.productInfo.findMany({
    include: {
      description: true,
    },
  });
};

export const getById = async (id: string) => {
  const productInfo = await prisma.productInfo.findFirst({
    where: { id },
    include: {
      description: true,
    },
  });

  if (!productInfo) {
    throw new Error(PRODUCT_INFO_NOT_FOUND_ERROR);
  }

  return productInfo;
};

export const destroy = async (id: string) => {
  const productInfoToDelete = await prisma.productInfo.findFirst({
    where: { id },
    include: {
      description: true,
    },
  });

  if (!productInfoToDelete) {
    throw new Error(PRODUCT_INFO_NOT_FOUND_ERROR);
  }

  return await prisma.productInfo.delete({
    where: { id },
    include: { description: true },
  });
};

export const update = async (
  id: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  { description, ...updatedFields }: Partial<ProductInfoInterface>
) => {
  const productInfoToUpdate = await prisma.productInfo.findFirst({
    where: { id },
  });

  if (!productInfoToUpdate) {
    throw new Error(PRODUCT_INFO_NOT_FOUND_ERROR);
  }

  await prisma.productInfo.update({
    where: { id },
    data: {
      ...productInfoToUpdate,
      ...(updatedFields as ProductInfo),
    },
  });

  if (description) {
    for (const { id, ...updatedDescription } of description) {
      try {
        await descriptionService.update(id, updatedDescription);
      } catch (ex) {
        console.warn(ex.message);
      }
    }
  }

  return {
    ...productInfoToUpdate,
    ...updatedFields,
  };
};
