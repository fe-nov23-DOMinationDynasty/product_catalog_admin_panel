import { Description } from '@prisma/client';
import prisma from '../utils/db';

const DESCRIPTION_NOT_FOUND_ERROR = 'Description info not found';

export const getAll = async () => {
  return await prisma.description.findMany();
};

export const getById = async (id: string) => {
  const description = await prisma.description.findFirst({
    where: { id },
  });

  if (!description) {
    throw new Error(DESCRIPTION_NOT_FOUND_ERROR);
  }

  return description;
};

export const destroy = async (id: string) => {
  const descriptionToDelete = await prisma.description.findFirst({
    where: { id },
  });

  if (!descriptionToDelete) {
    throw new Error(DESCRIPTION_NOT_FOUND_ERROR);
  }

  return await prisma.description.delete({
    where: { id },
  });
};

export const update = async (
  id: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updatedFields: Partial<Description>
) => {
  const descriptionToUpdate = await prisma.description.findFirst({
    where: { id },
  });

  if (!descriptionToUpdate) {
    throw new Error(DESCRIPTION_NOT_FOUND_ERROR);
  }

  await prisma.description.update({
    where: { id },
    data: {
      ...descriptionToUpdate,
      ...updatedFields,
    },
  });

  return {
    ...descriptionToUpdate,
    ...updatedFields,
  };
};
